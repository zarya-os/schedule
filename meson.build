# SPDX-FileCopyrightText: 2022 Romain Vigier <contact AT romainvigier.fr>
# SPDX-License-Identifier: GPL-3.0-or-later

project(
  'schedule',
  version: '74',
  license: ['GPL-3.0-or-later', 'CC-BY-SA-4.0'],
  meson_version: '>= 0.56.0'
)

UUID = 'schedule@zarya.com'
DNS = 'org.gnome.shell.extensions.nightthemeswitcher'

INSTALL_DIR = get_option('datadir') / 'gnome-shell' / 'extensions' / UUID
SCHEMA_INSTALL_DIR = get_option('datadir') / 'glib-2.0'

if get_option('pack')
  INSTALL_DIR = meson.project_build_root() / UUID
endif

gnome = import('gnome')
i18n = import('i18n')

npm_exe = find_program('npm', required: false)
if npm_exe.found()
  run_target('dev', command: [ npm_exe, 'install', '--save-dev' ])
endif

subdir('src')
#subdir('tests')
