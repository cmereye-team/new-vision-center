#!/bin/bash

# FTP服务器信息
FTP_HOST="139.196.220.221"  # 确保这个是实际的FTP服务器地址
FTP_USER="root"
FTP_PASS="binbo12300.."

# 本地文件路径
LOCAL_FILE_PATH="dist.zip"

# 远程上传目录
REMOTE_DIR="www/wwwroot/test-jenkins.xiqiguguai.link/dist"

# SSH服务器信息（假设与FTP服务器相同）
SSH_USER="root"
SSH_PASS="binbo12300.."
SSH_HOST="139.196.220.221"

# 使用expect自动化FTP上传
# ftp_upload() {
#   ftp -inv $FTP_HOST <<EOF
# user $FTP_USER $FTP_PASS
# cd $REMOTE_DIR
# put $LOCAL_FILE_PATH
# bye
# EOF
# }

# 使用expect自动化SSH执行命令
ssh_unzip() {
  expect -c "
  spawn ssh $SSH_USER@$SSH_HOST
  expect \"password:\"
  send \"$SSH_PASS\r\"
  expect \"#\"
  send \"cd /www/wwwroot/test-jenkins.xiqiguguai.link/\r\"
  expect \"#\"
  send \"unzip -o $REMOTE_DIR/$(basename $LOCAL_FILE_PATH) -d /www/wwwroot/test-jenkins.xiqiguguai.link/\r\"
  expect \"#\"
  send \"exit\r\"
  expect eof
  "
}

# 上传文件并检查退出状态
ftp_upload
if [ $? -eq 0 ]; then
  echo "文件上传成功"
  # 解压文件
  ssh_unzip
  if [ $? -eq 0 ]; then
    echo "文件解压成功"
  else
    echo "文件解压失败"
  fi
else
  echo "文件上传失败"
fi


# 安装 Plink windows 

