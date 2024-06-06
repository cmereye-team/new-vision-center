#!/bin/bash

# Run pnpm run generate
echo "Executing 'pnpm run generate' after git push..."
pnpm run generate

# Check if pnpm run generate succeeded
if [ $? -eq 0 ]; then
    echo "pnpm run generate completed successfully. Creating zip archive..."

    # Define the directories and files to include in the zip archive
    SOURCE_DIR="dist"  # Change this to the directory containing generated files
    ZIP_FILE="dist.zip"

    # Create the zip archive
    zip -r "$ZIP_FILE" "$SOURCE_DIR"

    if [ $? -eq 0 ]; then
        echo "Zip archive created: $ZIP_FILE"
        # 将打包后的dist 复制一份移动到 桌面 并且删除当前dist
        rm -rf ~/Desktop/dist
        cp -r dist ~/Desktop/dist
        # 通过ssh  连接 admin@172.17.42.198 上传dist所有文件到 
        #/www/wwwroot/test-jenkins.xiqiguguai.link
        ssh admin@139.196.220.221 "rm -rf /www/wwwroot/test-jenkins.xiqiguguai.link/dist && mkdir /www/wwwroot/test-jenkins.xiqiguguai.link/dist && cp -r ~/Desktop/dist/* /www/wwwroot/test-jenkins.xiqiguguai.link/dist"
    else
        echo "Failed to create zip archive."
    fi
else
    echo "pnpm run generate failed. Skipping zip archive creation."
fi
