# website

Need a pipeline, but deploy is simple right now.


```
ssh with key to ubuntu user on VM running websitee
sudo su -
cd /root/website
pm2 stop docudio
git pull
cd docudio
npm run build
```
