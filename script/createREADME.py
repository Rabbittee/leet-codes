from datetime import datetime, timezone, timedelta
from os import mkdir, replace
from os.path import isdir, join
import sys
from typing import List
import csv
# import json

import requests

shieldsUrl = "https://img.shields.io/badge/"
color = ["EF9A9A", "B39DDB", "81D4FA",
         "A5D6A7", "FFF59D", "FFAB91", "B0BEC5"]
backslash_char = "\n\n"


def get_problem_list() -> List[List[str]]:
    with open('problem_list.log', 'r') as fin:
        cin = csv.reader(fin)
        logs = [row for row in cin if len(row) > 0]

    return logs


def add__problem_list(logs) -> None:
    with open('problem_list.log', 'wt') as fout:
        csvout = csv.writer(fout)
        csvout.writerows(logs)


def format_log_list(logs, leetcode_info, y_m_d) -> dict:
    if logs[-1][3] == y_m_d:
        return logs

    difficulty = leetcode_info['difficulty']
    leetcode_url = f'https://leetcode.com/problems/{leetcode_info["titleSlug"]}/'
    topic_tags = ';'.join([tag['name'] for tag in leetcode_info['topicTags']])

    logs.append([len(logs), int(leetcode_info['questionId']),
                leetcode_url, y_m_d, difficulty, topic_tags])

    # for log in logs[1:]:
    #     info = get_leetcode(get_problem_name(log[2]))
    #     log.insert(4, info['title'])

    return logs


def get_problem_name(url: str) -> str:
    url_list = url.split('/')
    return url_list[-2] if url_list[-1] == '' else url_list[-1]


def get_leetcode(title: str) -> dict:
    payload = {
        "operationName": "questionData",
        "variables": {"titleSlug": title},
        "query": "query questionData($titleSlug: String!) {question(titleSlug: $titleSlug) {questionId,title,titleSlug,difficulty,content,exampleTestcases,topicTags {name,slug,translatedName}hints}}"
    }

    r = requests.post(
        'https://leetcode.com/graphql',
        headers={'Content-Type': 'application/json'},
        json=payload)

    return r.json()["data"]["question"]


def mkdir_today(day: int, last_log_date) -> str:
    tz = timezone(timedelta(hours=+8))
    now = datetime.now(tz).isoformat(timespec="seconds")
    y_m = now[:7]
    y_m_d = now[:10]

    if last_log_date == y_m_d:
        return join(y_m, f'{y_m_d} (day{day-1})')

    if not isdir(y_m):
        mkdir(y_m)

    folder = join(y_m, f'{y_m_d} (day{day})')
    if not isdir(folder):
        mkdir(folder)

    return folder


def declare_tag(index: int, tag: dict) -> str:
    name = tag["name"].replace(" ", "%20").replace("-", "%20")
    return f'[{tag["slug"]}]: {shieldsUrl}-{name}-{color[index]}'


def tag_label(tag: dict) -> str:
    return f'![{tag["name"]}][{tag["slug"]}]'


def create_readme(folder: str, info: dict) -> None:

    topic_tags = [declare_tag(i, tag)
                  for i, tag in enumerate(info["topicTags"])]

    labels = [tag_label(tag)
              for i, tag in enumerate(info["topicTags"])]

    info['def_tag'] = '\n'.join(topic_tags)
    info['topic_tags'] = backslash_char.join(labels)

    with open('script/README.template', 'r') as fin:
        template = fin.read()

    for key in ['questionId', 'title', 'titleSlug', 'difficulty', 'content', 'def_tag', 'topic_tags']:
        template = template.replace(f'{{{{{key}}}}}', info[key])

    with open(f'{folder}/README.md', 'wt') as fout:
        fout.write(template)


def make_markdown_table(array):
    """
        https://gist.github.com/m0neysha/219bad4b02d2008e0154
        Input: Python list with rows of table as lists
               First element as header.
        Output: String to put into a .md file

    Ex Input:
        [["Name", "Age", "Height"],
         ["Jake", 20, 5'10],
         ["Mary", 21, 5'7]]
    """

    markdown = "\n" + str("| ")

    for e in array[0]:
        to_add = " " + str(e) + str(" |")
        markdown += to_add
    markdown += "\n"

    markdown += '|'
    for i in range(len(array[0])):
        markdown += str("-------------- | ")
    markdown += "\n"

    for entry in array[1:]:
        markdown += str("| ")
        for e in entry:
            to_add = str(e) + str(" | ")
            markdown += to_add
        markdown += "\n"

    return markdown + "\n"


def create_cover_readme(logs) -> None:
    # first_day = logs[0][3]
    leetcode_url_def = sorted(
        [f'[{int(log[1]):04}]: {log[2]}' for log in logs[1:]])

    # | Day |    id    | Title|    Difficulty     |Related Topics
    # [Same Tree](<./2021-07-29%20(day11)>)
    daily_table = [['Day', 'Id', 'Title', 'Difficulty', 'Related Topics']] + \
        [[
            f'{int(log[0]):03}',
            f'[{log[1]}][{int(log[1]):04}]',
            f'[{log[4]}](<.{log[3][:7]}{log[3]}%20(day{log[0]})>)',
            f'![{log[5]}][{log[5]}]',
            f'{log[6].replace(";", "; ")}'
        ]
            for log in logs[1:]]

    replace_data = {
        'leetcode_url_def': '\n'.join(list(leetcode_url_def)),
        'daily_table': make_markdown_table(daily_table)
    }

    with open('script/COVER_README.template', 'r') as fin:
        template = fin.read()

    for key, value in replace_data.items():
        template = template.replace(f'{{{{{key}}}}}', value)

    with open(f'README.md', 'wt') as fout:
        fout.write(template)


if __name__ == '__main__':

    leetcode_url = sys.argv[1]
    leetcode_info = get_leetcode(get_problem_name(leetcode_url))
    # print(json.dumps(leetcode_info))

    logs = get_problem_list()
    # #,id,leetcode_url,date,difficulty,tags

    folder = mkdir_today(len(logs), logs[-1][3])

    create_readme(folder, leetcode_info)

    logs = format_log_list(logs, leetcode_info, folder[8:18])
    add__problem_list(logs)

    create_cover_readme(logs)

    print('over')
