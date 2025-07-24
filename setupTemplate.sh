#!/bin/bash

default="sokos-astro-template"

echo '**** Setup for sokos-astro-template ****'
echo
read -p 'Project name (sokos-up-xxxx): ' projectName
echo

grep -rl $default --exclude=setupTemplate.sh | xargs -I@ sed -i '' "s|$default|sokos-up-$projectName|g" @