# Angular
Fundamentals of Angular

(1) Binding
    1. Class to Template Binding
        -> Interpolation {{}}
        -> Property Binding []
    2. Template to Class Binding
        -> Event Binding ()
    3. Both side Binding
        -> Two way Data Binding
            1. Split Binding: Property-Binding[] + Event-Binding()
            2. Getters & Setters (used private property)

(2) Component to Component Interaction
    1. using Input() decorator
    2. using Getters & Setters
    3. using ngOnChanges()
    4. Access Child Component Property from Parent
        -> Template Refrence Variable
        -> ViewChild Decorator
    5. Access Parent Componenet Property from Child
        -> Event Emitter with @Output() decorator

(3) Subject
    1. It is a service. that used to interact between two components
    2. Subject used as a Observer & Observable both.

------------------------- Routing ------------------------------

(1) <router-outlet>: Tells angular about all routes access, defined in module.
(2) {path: '**', component: ErrorComponent}
        1. If any route not match, then angular redirect to this route.
        2. Always write this route at last, bcz after comparing with all above route,     control goes for this route.
(3) routerLink
        1. We use this, beacuse the application state will same, and we navigate without any page load OR state change.
(4) routerLinkActive
        1. Apply css class on active link.
(5) routerLinkActiveOptions
        1. Apply css class on fully match path/url.
(6) Absolute Path
        1. '/home' -> It will append to parent route.
(7) Relative Path
        1. 'home' -> It will append to current path.
        2. './home' -> It will also append to current path.
(8) router.navigate() & router.navigateByUrl()
        1. Both redirect as Absolute Path
        2. router.navigate(['home']) & router.navigateByUrl('home')
        3. If want Relative Path with router.navigate():
            -> Import ActivatedRoute
            -> private activatedRoute: ActivatedRoute
            -> router.navigate(['home'], {relativeTo: this.activatedRoute})