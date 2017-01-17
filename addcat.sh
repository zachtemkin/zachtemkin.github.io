#!/bin/bash

match='post \\n'
insert='categories: blog'
file='file.txt'

sed -i "s/$match/$match\n$insert/" $file