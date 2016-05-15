#currently not functioning... use two screens
pelican -r &
cd output &&
python -m pelican.server &
echo 1
