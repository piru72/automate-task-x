import os

# folder path
dir_path = r'D:\\GITHUB_REPOS\\Small_tools\\FILE_NAME_EXTRACTOR\\files'

# list to store files
res = []

# Iterate directory
for path in os.listdir(dir_path):
    # check if current path is a file
    if os.path.isfile(os.path.join(dir_path, path)):
        res.append(path)
for details in (res):
    print (details)


