#!/bin/sh

changedFiles="$(git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD)"

runOnChange() {
	echo "$changedFiles" | grep -q "$1" && echo -e "$2"
}

runOnChange package-lock.json "\n\033[33mpackage-lock.json\033[35m has changed. Use\033[33m npm run packages:install\033[35m to update your npm dependencies.\n"

runOnChange ios/Podfile.lock "\n\033[33mPodfile.lock\033[35m has changed. Use\033[33m npm run pods:install\033[35m to update your pods dependencies.\n"

runOnChange Gemfile.lock "\n\033[33mGemfile.lock\033[35m has changed. Use\033[33m npm run gems:install\033[35m to update your gems dependencies.\n"

exit 0
