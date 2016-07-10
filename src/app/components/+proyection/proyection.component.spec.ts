import {TestComponentBuilder} from "@angular/compiler/testing";
import {Component} from "@angular/core";
import {
    describe,
    expect,
    it,
    inject
} from "@angular/core/testing";
import {getDOM} from "@angular/platform-browser/src/dom/dom_adapter";
import {ProyectionComponent} from "./proyection.component";

export function main() {
    describe('About component', () => {


        it('should work',
            inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
                tcb.createAsync(ProyectionComponent)
                    .then((rootTC:any) => {
                        let aboutDOMEl = rootTC.debugElement.children[0].nativeElement;

                        expect(getDOM().querySelectorAll(aboutDOMEl, 'h1')[0].textContent).toEqual("Hey, I'm About !");
                    });
            }));
    });
}

@Component({
    selector: 'test-cmp',
    directives: [ProyectionComponent],
    template: '<sd-about></sd-about>'
})
class TestComponent {
}
