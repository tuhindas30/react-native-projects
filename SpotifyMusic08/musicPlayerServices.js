import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';

import {playList} from './src/constants';

export const setupPlayer = async () => {
  let isSetupDone = false;
  try {
    await TrackPlayer.getActiveTrackIndex();
    isSetupDone = true;
  } catch (e) {
    await TrackPlayer.setupPlayer();
    isSetupDone = true;
  } finally {
    return isSetupDone;
  }
};

export const addTracks = async () => {
  await TrackPlayer.add(playList);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};

export const playbackService = async () => {
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());
  TrackPlayer.addEventListener(Event.RemoteNext, () =>
    TrackPlayer.skipToNext(),
  );
  TrackPlayer.addEventListener(Event.RemotePrevious, () =>
    TrackPlayer.skipToPrevious(),
  );
};
