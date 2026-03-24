# RN_eng618 -> eng618.github.io parity + gvtech-design migration plan

## Objective

Bring the React Native project into feature/content parity with the web portfolio at `eng618.github.io`, using the new UI component library `gvtech-design` for shared design consistency.

## Guiding principles

- keep existing functionality working during migration
- source of truth is web portfolio content/pages (apps, posts, notes, about, contact)
- map RN native screens to core web entries
- component-first: use `gvtech-design` primitives for UI
- incremental rollout with feature flags / branches

## Phases

### Phase 1: Discovery & alignment (done first)

- [x] Inventory of RN screens/content (home, settings)
- [ ] Inventory of web portfolio pages and content blocks
- [ ] Create mapping doc (pages in web `eng618.github.io` => RN screens)
- [ ] Define navigation flow for RN app
- [ ] define shared assets (icons, images, data endpoints)

### Phase 2: Setup & architecture

- [ ] install `gvtech-design` package in `RN_eng618`
- [ ] configure RN app to use new design tokens and theme provider (if provided by system)
- [ ] setup `components/ui` wrappers for app-specific variants
- [ ] set up lint/format rules consistent with `gvtech-design` and monorepo style

### Phase 3: Core screen scaffolding

- [ ] `Home` screen: portfolio intro + section cards (apps, posts, notes, resume, links)
- [ ] `ProjectsList` screen: match web portfolio app list from `content/apps/` data
- [ ] `About` screen: match web about content
- [ ] `Blog` / `Notes` screen: show latest notes as cards/list from local web content or simplified dataset
- [ ] `Settings` screen: theming, preferences

### Phase 4: Content sync + data crosswalk

- [ ] implement content import script/transformer from `eng618.github.io/content` to RN JSON data store (or REST API)
- [ ] include static summaries for Post index, featured projects, life events
- [ ] implement data refresh path (manual or live prediction if planned)

### Phase 5: Polishing + features

- [ ] deep link support for key sections
- [ ] tracking analytics / plausible (if desired, using eng618 convention)
- [ ] accessibility and performance audit
- [ ] tests for UI components and navigation flows

## Implementation notes for `gvtech-design`

- use `src/components/ui` path from `gvtech-design` for React Native components, e.g. `Button`, `Card`, `Text`, etc.
- if the library has the same API for web/native, build `RN_eng618/components/ui/` wrapper for app-specific props
- prefer reusing existing RN `ProjectsList` and screen patterns where possible

## Status tracking

- this doc is the source-of-truth in `RN_eng618/docs`
- update each checkbox as tasks progress

### Phase status

| Phase                         | Status         | Notes                                                               |
| ----------------------------- | -------------- | ------------------------------------------------------------------- |
| Discovery & alignment         | ✅ Complete    | Inventory done, mapping doc drafted                                 |
| Setup & architecture          | 🔄 In progress | `@gv-tech/ui-native` already installed; adding app routes + screens |
| Core screen scaffolding       | 🔄 In progress | `Home`, `Projects`, `Settings` mostly present; add `About`, `Posts` |
| Content sync + data crosswalk | ⏳ Planned     | Next: import web content from `eng618.github.io/content`            |
| Polishing + features          | ⏳ Planned     | will follow after core pages are live                               |

## Next actions (to execute now)

1. create a minimal proof-of-concept home screen with one `gvtech-design` card in `components/screens/home-screen.tsx`
2. wire `Stack` navigator page for `About` and `Projects`
3. add `gvtech-design` dependency with `yarn add` / `npm install`
4. run test/build

> Notes
>
> - the web content is in `eng618.github.io/content/...`; we can iterate with a JSON import utility.
> - if you want I can also create a `docs/engineering.md` section for branch/PR process and milestones.
