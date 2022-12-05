import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForecastWeatherComponent } from './forecast-weather.component';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';

describe('ForecastWeatherComponent', () => {
  let component: ForecastWeatherComponent;
  let fixture: ComponentFixture<ForecastWeatherComponent>;
  let storeMock;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({})
      ],
      providers: [
        HttpClient,
        HttpHandler,
        StoreModule.forRoot({})
      ],
      declarations: [ForecastWeatherComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  beforeEach(() => {
    storeMock = {
      dispatch: jasmine.createSpy("dispatch"),
      pipe: jasmine.createSpy("pipe").and.returnValue(
        from(
          [{
            requestTimeout: 5000,
          }]
        )
      )

    }

  })


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
