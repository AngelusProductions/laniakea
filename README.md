# laniakea

ness's internal website

*only working commits allowed*

#### Debugging Tips
1. Use `<BrowserRouter/>` around `<Layout/>` if you get the following error:
    `Invariant failed: You should not use <Route> outside a <Router>`
2. When calling child objects from `NEFormValidation` use function notation, ie:
    `NEFormValidation.Studies.Find(e => e.Id == id).StudyComponents();` 
3. Always import `Route` from `react-router-dom` not `react-router`
4. `withRouter()` should emcompass the `()` after `connect()` too