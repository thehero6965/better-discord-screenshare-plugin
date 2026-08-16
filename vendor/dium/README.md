# dium (vendored)

This is a trimmed, local copy of the `Finder` / `Patcher` / `Logger` / `Utils.queryTree`
/ `setMeta` surface of [dium](https://github.com/Zerthox/BetterDiscord-Plugins/tree/master/packages/dium)
by [Zerthox](https://github.com/Zerthox) (MIT licensed, see `LICENSE`), reimplemented
from the upstream source as of commit
[`master`](https://github.com/Zerthox/BetterDiscord-Plugins/tree/master/packages/dium/src)
circa August 2026.

## Why vendored instead of a dependency

The project previously depended on dium via
`https://gitpkg.now.sh/Zerthox/BetterDiscord-Plugins/packages/dium?master`, since dium
lives in a subdirectory of a monorepo and isn't published to npm. That gitpkg.now.sh
proxy service now returns `402 Payment Required` for everyone, breaking installs.

Rather than depend on another third-party "grab a subfolder from GitHub" proxy (equally
prone to disappearing), this vendors only the handful of functions this plugin actually
calls. The current upstream `dium` also pulls in a large, unrelated dependency tree
(React Spring, `highlight.js`, `moment`, `lottie-web`, `@discord/intl`, etc.) for its
settings-panel/markdown framework, none of which this plugin uses.

If you want to pull in more of dium's functionality later, copy the relevant file(s)
from upstream into `src/` here and extend `index.ts`'s exports.
