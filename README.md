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