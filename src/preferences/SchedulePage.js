// SPDX-FileCopyrightText: 2020-2022 Romain Vigier <contact AT romainvigier.fr>
// SPDX-License-Identifier: GPL-3.0-or-later

const { Adw, Gio, GLib, GObject, Gtk } = imports.gi;
const { extensionUtils } = imports.misc;

const Me = extensionUtils.getCurrentExtension();


var SchedulePage = GObject.registerClass({
    GTypeName: 'SchedulePage',
    Template: 'resource:///org/gnome/shell/extensions/nightthemeswitcher/preferences/ui/SchedulePage.ui',
    InternalChildren: [
        'manual_schedule_radio',
        'automatic_schedule_radio',
        'schedule_sunrise_time_chooser',
        'schedule_sunset_time_chooser',
    ],
}, class SchedulePage extends Adw.PreferencesPage {
    constructor(props = {}) {
        super(props);
        const settings = extensionUtils.getSettings(`${Me.metadata['settings-schema']}.time`);

        settings.bind('manual-schedule', this._manual_schedule_radio, 'active', Gio.SettingsBindFlags.DEFAULT);

        if (settings.get_boolean('manual-schedule')) {
            this._manual_schedule_radio.set_active(true);
        } else {
            this._automatic_schedule_radio.set_active(true);
        }

        settings.bind('sunrise', this._schedule_sunrise_time_chooser, 'time', Gio.SettingsBindFlags.DEFAULT);
        settings.bind('sunset', this._schedule_sunset_time_chooser, 'time', Gio.SettingsBindFlags.DEFAULT);

    }
});