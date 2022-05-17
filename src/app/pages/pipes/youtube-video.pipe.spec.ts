import { YoutubeVideoPipe } from './youtube-video.pipe';

describe('YoutubeVideoPipe', () => {
  it('create an instance', () => {
    const pipe = new YoutubeVideoPipe();
    expect(pipe).toBeTruthy();
  });
});
