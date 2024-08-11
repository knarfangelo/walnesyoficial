import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoomDetectorService {

  private zoomLevelSubject = new BehaviorSubject<number>(100);

  constructor() {
    this.detectZoomLevel();
    window.addEventListener('resize', this.detectZoomLevel.bind(this));
  }

  private detectZoomLevel(): void {
    const zoomLevel = Math.round((window.outerWidth / window.innerWidth) * 100);
    this.zoomLevelSubject.next(zoomLevel);
  }

  getZoomLevel() {
    return this.zoomLevelSubject.asObservable();
  }

}
