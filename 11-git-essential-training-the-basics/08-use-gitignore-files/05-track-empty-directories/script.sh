# Track empty directories

# - Git is designed to track files, to be a file tracking system
# - Track files
# - Track the directories ti takes to get to files
# - Ignores directories that are empty


touch path/to/empty/directory/.gitkeep
git add path/to/empty/directory/.gitkeep
git commit -m "Add .gitkeep file to track empty directory"