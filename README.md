# Important Notice

**This project has been moved from BetterDiscord to Vencord.** Please visit the new repository:

[Vencord Repository](https://github.com/philhk/Vencord)

# Better Discord Screenshare Plugin

With this plugin you can customize your resolution, framerate, bitrate and more for your screenshare on discord! This plugin requires an [installation](https://github.com/BetterDiscord/BetterDiscord#manual-installation 'installation') of the [BetterDiscord](https://github.com/BetterDiscord/BetterDiscord 'BetterDiscord') client.

<div align='center'>
  <img src="./preview.png" height='450'>
</div>

## Plugin

To get the plugin, you can either build it yourself by cloning this repository or download the latest version from the Releases tab.

## Features

- **Capture** - Set a custom capture resolution and framerate.
- **Encode** - Set a custom encode resolution and framerate.
- **Bitrate** - Set a custom min, target and max bitrate.
- **Keyframe Interval** - Set a custom keyframe interval.
- **Audio Source** - Set a custom audio source even when sharing a screen.
- **Codec** - Set a custom video and audio codec [OPUS, H264, VP8, VP9, AV1].

## Default Config

```
{
  bitrate: {
    minimum: 1000,
    target: 2500,
    maximum: 5000,
  },
  encode: {
    framerate: 60,
    height: 1080,
    width: 1920,
  },
  capture: {
    framerate: 60,
    height: 1080,
    width: 1920,
  },
  audioCodec: 'OPUS',
  videoCodec: 'H264',
}
```

## Known Issues

When sharing a window directly it can sometimes happen that no changes are applied, the reason for this is unknown at this time, but to avoid this you can simply share your screen and set the audio source if needed.

Quality settings are configured through this plugin's own settings panel (BetterDiscord Settings → Plugins → the gear icon next to BetterScreenshare) and are applied automatically when you go live. Do not use Discord's own native SD/HD quality toggle while this plugin is active and you're already sharing — switching it mid-stream conflicts with the quality this plugin has already forced onto the connection and can leave the shared video frozen/black until you switch to a different screen or application source.

## Scripts

- `build` Build the plugin.
- `watch` Build the plugin when a change was made.

## Credits

- [Zerthox](https://github.com/Zerthox) for BetterDiscord's API [typings](https://github.com/Zerthox/betterdiscord-types), [Dium](https://github.com/Zerthox/BetterDiscord-Plugins/tree/master/packages/dium) and his huge amount of help.
