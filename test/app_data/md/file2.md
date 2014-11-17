/*doc
---
title: Buttons
name: button
category: Base CSS
---

Button styles can be applied to any element. Buttons provide feedback, 
confirmation, a sense of action and completion. We use color throughout 
our button system to provide clear and consistent communication of the action 
being taken. Micro-interactions can be added to provide unexpected delight to mundane tasks. 
Typically you'll want to use either a `<button>` or an `<a>` element:

```html_example
<button class="btn btn-default">Click</button>
<a class="btn btn-default" href="http://trulia.com">Don't click</a>
```

If your button is actually a link to another page, please use the
`<a>` element, while if your button performs an action, such as submitting
a form or triggering some javascript event, then use a `<button>` element.

Accessibility: To be accessible do x and do y. Some rules for accessibility

##Button Sizes
There are three 4 sizes for buttons: Large, medium (default), small and extra small. 
Simply apply the size modifier class for the desired size.
There is also an additional modifier that will make the button take the
full width of the container. It may be used with the any of the button
size and style modifiers.

Button                                                                  | Modifier Class
----------------------------------------------------------------------- | -----------------
<button class="btn btn-default btn-lg">Large</button>                   | `btn btn-default btn-lg`
<button class="btn btn-default">Default</button>                        | `btn btn-default`
<button class="btn btn-default btn-sm">Small</button>                   | `btn btn-default btn-sm`
<button class="btn btn-default btn-xs">Extra Small</button>             | `btn btn-default btn-xs`
<button class="btn btn-default btn-block">Full Width Button</button>    | `btn btn-block`

##Button Styles

Button                                                     | Class                      | Description
---------------------------------------------------------- | -------------------------- | -----------
<button class="btn btn-default">Default</button>           | `btn btn-default`          | Standard button
<button class="btn btn-primary">Primary</button>           | `btn btn-primary`          | Provides extra visual weight and identifies the primary action in a set of buttons
<button class="btn btn-success">Success</button>           | `btn btn-success`          | Indicates a successful or positive action
<button class="btn btn-info">Info</button>                 | `btn btn-info`             | Contextual button for informational alert messages
<button class="btn btn-warning">Warning</button>           | `btn btn-warning`          | Indicates caution should be taken with this action
<button class="btn btn-danger">Danger</button>             | `btn btn-danger`           | Indicates a dangerous or potentially negative action
<button class="btn btn-link">Link</button>                 | `btn btn-link`             | Deemphasize a button by making it look like a link while maintaining button behavior
<button class="btn btn-default active">Active</button>     | `btn btn-default active`   | A buttons active state
<button class="btn btn-default disabled">Disabled</button> | `btn btn-default disabled` | A buttons inactive or disabled state

*/

.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}