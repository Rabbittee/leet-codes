from datetime import date
from os import listdir, mkdir
from os.path import isfile, isdir, join
import sys

import requests


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
    last = file_paths[-1]
    today_iso = today.isoformat()
    if today_iso not in last:
        day += 1

    folder = f'{today_iso} (day{day})'
    if not isdir(folder):
        mkdir(folder)

    return folder


def create_readme(folder, info):
    shieldsUrl = "https://img.shields.io/badge/"
    backslash_char = "\n\n"

    color = ["EF9A9A", "B39DDB", "81D4FA",
             "A5D6A7", "FFF59D", "FFAB91", "B0BEC5"]

    def tag_label(index, tag):
        declare = f'[{tag["slug"]}]: {shieldsUrl}-{tag["name"].replace(" ", "%20").replace("-", "%20")}-{color[index]}'

        return f'{declare}\n![{tag["name"]}][{tag["slug"]}]'

    topic_tags = [tag_label(i, tag) for i, tag in enumerate(info["topicTags"])]

    poem = f'''# {info["questionId"]}. {info["title"]}
{info["difficulty"]}\n\n
## Description
{info["content"]}\n\n
---\n
Topic Tags\n
{backslash_char.join(topic_tags)}\n
---\n
##### [original question](https://leetcode.com/problems/{info["titleSlug"]})
'''

    with open(f'{folder}/README.md', 'wt') as fout:
        fout.write(poem)


if __name__ == '__main__':
    folder = mkdir_today()
    leetcode_info = get_leetcode(sys.argv[1])
    create_readme(folder, leetcode_info)
