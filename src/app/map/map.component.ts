import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MapService } from '../services/map.service';
import { IActivity } from '../shared/activity.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {

  constructor(private _mapService: MapService,
    private _route: ActivatedRoute) { }

  activity: any;
  activityName: string;
  activityComments: string;
  activityDate: Date;
  activityDistance: number;
  gpx: any;

  ngOnInit() {
    this.activity = this._mapService.getActivity(
      +this._route.snapshot.params['id']
    )
  }

  ngAfterViewInit(){
    this._mapService.plotActivity(+this._route.snapshot.params['id']);
    this.activityName = this.activity.name;
    this.activityComments = this.activity.comments;
    this.activityDistance = this.activity.distance;
    this.activityDate = this.activity.date;
    this.gpx = this.activity.gpxData;
  }

}
