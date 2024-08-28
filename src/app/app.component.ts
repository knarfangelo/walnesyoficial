import { Component, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'walnesy';

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    this.loadVoiceflowScript();
  }

  loadVoiceflowScript() {
    this.ngZone.runOutsideAngular(() => {
      const script = document.createElement('script');
      script.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
      script.type = 'text/javascript';
      script.onload = () => {
        this.ngZone.run(() => {
          (window as any).voiceflow.chat.load({
            verify: { projectID: '66b8cbd4a0f89bc1e5ef6f7a' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
          });
        });
      };
      document.head.appendChild(script);
    });
  }
}
