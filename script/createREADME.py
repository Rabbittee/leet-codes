from datetime import date
from os import listdir, mkdir
from os.path import isfile, isdir, join
import sys

import requests

shieldsUrl = "https://img.shields.io/badge/"
color = ["EF9A9A", "B39DDB", "81D4FA",
         "A5D6A7", "FFF59D", "FFAB91", "B0BEC5"]
backslash_char = "\n\n"


def get_leetcode(title):
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


def mkdir_today():
    today = date.today()
    my_path = '.'

    file_paths = [join(my_path, f) for f in listdir(my_path)]
    file_paths = sorted(
        [path[2:] for path in file_paths if isdir(path) and '(day' in path]
    )

    day = len(file_paths)
    today_iso = today.isoformat()
    if day != 0:
        last = file_paths[-1]
        if today_iso not in last:
            day += 1
    else:
        day += 1

    folder = f'{today_iso} (day{day})'
    if not isdir(folder):
        mkdir(folder)

    return folder


def declare_tag(index, tag):
    name = tag["name"].replace(" ", "%20").replace("-", "%20")
    return f'[{tag["slug"]}]: {shieldsUrl}-{name}-{color[index]}'


def tag_label(tag):
    return f'![{tag["name"]}][{tag["slug"]}]'


def create_readme(folder, info):

    topic_tags = [declare_tag(i, tag)
                  for i, tag in enumerate(info["topicTags"])]

    labels = [tag_label(tag)
              for i, tag in enumerate(info["topicTags"])]

    info['def_tag'] = '\n'.join(topic_tags)
    info['topic_tags'] = backslash_char.join(labels)

    with open('script/README.template', 'r') as fin:
        template = fin.read()

    for key in ['questionId', 'title', 'difficulty', 'content', 'def_tag', 'topic_tags']:
        template = template.replace(f'{{{{{key}}}}}', info[key])

    with open(f'{folder}/README.md', 'wt') as fout:
        fout.write(template)


if __name__ == '__main__':
    folder = mkdir_today()
    leetcode_url = sys.argv[1]
    url_list = leetcode_url.split('/')
    problem = url_list[-2] if url_list[-1] == '' else url_list[-1]
    leetcode_info = get_leetcode(problem)
    create_readme(folder, leetcode_info)

    print('over')
