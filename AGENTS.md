<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture

- Keep shared portfolio content in `src/lib/site-data.ts` so Home and Portfolio never drift.
- Use semantic visual tokens from `src/styles.css`; route components should not introduce raw color values.
- Portfolio covers are abstract typographic compositions only until genuine project media is supplied.
- Store verified external project destinations alongside portfolio content in `src/lib/site-data.ts` so every work preview resolves consistently.
- Keep the global scroll indicator in a shared root-level component so progress behavior stays consistent across routes.
