1. Install `React generator` plugin for easy usage for generating React Components
    * `Functions based Components`
    * `Arrow Functions based Components`
    * `Class based Components`
2. Create folder `Navbar` and inside that folder please create `Navbar.tsx` file.
3. Add below code to `Navbar.tsx`.
    <div className="p-2 bg-blue-300">
        <h1 className="text-1xl text-tertiary text-center">This is NavBar</h1>
    </div>
    Then add `<Navbar>` in `App.tsx`
4. Create folder `MainContent` and inside that folder please create `MainContent.tsx` file.
    <div className="md:px12 p-4 max-2x1 mx-auto pt-28 pb-28 bg-amber-100">
        <h1 className="text-tertiary text-center">This is Main Content</h1>
    </div>
    Then add `<MainContent/>` in `App.tsx`
5. Create folder `Footer` and inside that folder please create `Footer.tsx` file.
    <div className="p-2 bg-blue-300">
        <h1 className="text-1xl text-tertiary text-center">This is Footer</h1>
    </div>
    Then add `<Footer/>` in `App.tsx`
6. Then apply gradient colors to Navbar
    `bg-gradient-to-r from-blue-500`
7. Then apply gradient to as well to Navbar
    `bg-gradient-to-r from-blue-500 to-red-400`
8. Then apply gradient to main content to show different direction
    `bg-gradient-to-br from-green-300 to-yellow-300`
9. Then show how to apply gradient in between those 2 colors
    `bg-gradient-to-br from-green-300 via-blue-100 to-yellow-300`
10. Then apply opacity to footer like this
    `bg-blue-300/50`
11. Then add a fixed height & fixed width box to main content
    `<div className="h-20 w-20 bg-yellow-400 text-center p-1">Height <br></br> & <br></br> Width</div>`
    `<div className="h-20 w-1/3 bg-yellow-400 text-center p-1">Height <br></br> & <br></br> Width</div>`
    `<div className="h-screen w-1/3 bg-yellow-400 text-center p-1">Height <br></br> & <br></br> Width</div>`
12. Then apply rotation css for the div
    `rotate-12 shadow-lg shadow-gray-900`
    `hover:shadow-red-500`
    `cursor-pointer`
13. Just use ! mark before your desired utility class to mark it as !important
14. Then apply different screen sizes for responsive
    `<div className="h-20 max-w-screen-sm bg-yellow-400 text-center p-1">Height <br></br> & <br></br> Width</div>`
    `<div className="h-20 max-w-screen-2xl bg-yellow-400 text-center p-1">Height <br></br> & <br></br> Width</div>`
15. Usage of mx-auto
    `<div className="h-20 max-w-screen-2xl bg-yellow-400 text-center p-1 mx-10">Height <br></br> & <br></br> Width</div>`
    `<div className="h-20 max-w-screen-2xl bg-yellow-400 text-center p-1 mx-auto">Height <br></br> & <br></br> Width</div>`