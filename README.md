# Google Calendar Analyser

## Getting Started

clasp login - login to google appscripts.

## Deploy

'npm run deploy'

## AppScript Dashboard

To view your projects go to https://script.google.com.

## List Deployments

clasp deployments

# Troubleshooting

**Permission denied when running batch file**
If you get a "permission denied" error when trying to run the batch file that builds the help file then run this command in the terminal `chmod u+x script.sh`

# TODO

- Automate build of help dialog.
- Add getting started to help dialog (capture first steps, settings, etc.)

# Issues

Issue#1 - Cannot test CalendarEvent.getMyStatus() as this refers to GoogleAppsScript.Calendar.GuestStatus which I can't reference as the
GoogleAppsScript typing is global and hence not 'importable' into this test. I've tried defining my own types that declare
modules that can be imported but can't seem to get it to work. Also tried overriding global in mocha test but had issues
matching types. Have spent enough time on it so deferring!
