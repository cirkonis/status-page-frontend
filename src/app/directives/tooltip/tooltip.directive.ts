import {ComponentRef, Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {Overlay, OverlayPositionBuilder, OverlayRef} from "@angular/cdk/overlay";
import {TooltipComponent} from "./tooltip.component";
import {ComponentPortal} from "@angular/cdk/portal";
import {timeout} from "rxjs/operators";

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit {
  @Input('appTooltip') text = '';

  private overlayRef!: OverlayRef;

  constructor(private overlayPositionBuilder: OverlayPositionBuilder,
              private elementRef: ElementRef,
              private overlay: Overlay){}

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top',
        offsetY: -42,
      }]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter')
  show() {
    const tooltipRef: ComponentRef<TooltipComponent>
      = this.overlayRef.attach(new ComponentPortal(TooltipComponent));
    tooltipRef.instance.text = this.text;
  }

  @HostListener('mouseout')
  hide() {
    timeout(100000, this.overlayRef.detach());
  }
}
