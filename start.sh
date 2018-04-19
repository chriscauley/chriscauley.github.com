#currently not functioning... use two screens
pelican -r &
cd output &&
python -m pelican.server 8889 &
echo 1
