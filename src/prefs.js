// SPDX-FileCopyrightText: 2020-2022 Romain Vigier <contact AT romainvigier.fr>
// SPDX-License-Identifier: GPL-3.0-or-later

'use strict';

const { Adw, Gdk, Gio, GLib, GObject, Gtk } = imports.gi;
const { extensionUtils } = imports.misc;

const Me = extensionUtils.getCurrentExtension();
const _ = extensionUtils.gettext;


/**
 * Initialize the preferences.
 */
function init() {
    extensionUtils.initTranslations();

    const resource = Gio.Resource.load(GLib.build_filenamev([Me.path, 'resources', 'preferences.gresource']));
    Gio.resources_register(resource);

    GObject.type_ensure(Me.imports.preferences.SchedulePage.SchedulePage);

    GObject.type_ensure(Me.imports.preferences.TimeChooser.TimeChooser);

    const iconTheme = Gtk.IconTheme.get_for_display(Gdk.Display.get_default());
    iconTheme.add_resource_path('/org/gnome/shell/extensions/nightthemeswitcher/preferences/icons');
}

/**
 * Fill the PreferencesWindow.
 *
 * @param {Adw.PreferencesWindow} window The PreferencesWindow to fill.
 */
function fillPreferencesWindow(window) {
    const { SchedulePage } = Me.imports.preferences.SchedulePage;

    [
        new SchedulePage(),
    ].forEach(page => window.add(page));

    window.search_enabled = false;
    window.set_default_size(386, 400);
}
