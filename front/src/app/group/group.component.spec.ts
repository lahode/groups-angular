import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { HomeComponent } from '../home/home.component';
import { GroupComponent } from './group.component';
import { PagerComponent } from '../pager/pager.component';

import { GroupService } from '../../services/group/group.service';
import { LogService } from '../../services/log/log.service';

describe('GroupComponent', () => {
  let component: GroupComponent;
  let fixture: ComponentFixture<GroupComponent>;
  let elButton: HTMLElement;
  let elTitle: HTMLElement;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        GroupComponent,
        PagerComponent
      ],
      providers: [
        {
          provide: ActivatedRoute, useValue: {
            params: Observable.of({ id: 'GtAat0n1wZGF03TZ' }) 
          }
        },
        GroupService,
        LogService
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [
            {path: '', component: HomeComponent}
          ]
        ),
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupComponent);
    component = fixture.componentInstance;
    elButton = fixture.debugElement.query(By.css('.btn-primary')).nativeElement;
    elTitle = fixture.debugElement.query(By.css('h2')).nativeElement;
    fixture.detectChanges();
  });

  it('should contain a button "Back To Home"', async () => {
    expect(elButton.textContent).toBe('Back To Home');
  });


  it('should contain "Details on group \'IDEVELOP\'" as group title ', async () => {
    expect(elTitle.textContent).toBe("Details on group 'IDEVELOP'");
  });

});
