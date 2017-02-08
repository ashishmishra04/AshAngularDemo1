/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {AppleComponentComponent} from "./apple-component.component";

describe('AppleComponentComponent', () => {
  let component: AppleComponentComponent;
  let fixture: ComponentFixture<AppleComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppleComponentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
