<!--
 * @Author: 谭洁莹
 * @Date: 2026-03-24 14:28:36
 * @LastEditTime: 2026-08-11 15:59:47
 * @FilePath: /app/components/common/YoutubePlayer.vue
 * @Description: 
-->
<script lang="ts" setup>
/**
 * @prop id        - YouTube视频id
 * @prop start     - 视频起始时间
 * @prop cover     - 视频封面
 */
const props = withDefaults(
  defineProps<{
    id: string;
    start?: number;
    cover?: string;
  }>(),
  {
    start: undefined,
    cover: undefined,
  },
);

const playerVars = computed(() => {
  const vars: YT.PlayerVars = {
    autoplay: 0,
    playsinline: 1,
  };
  if (typeof props.start === "number" && props.start > 0) {
    vars.start = Math.floor(props.start);
  }
  return vars;
});
</script>

<template>
  <ScriptYouTubePlayer :video-id="id" :player-vars="playerVars" class="youtube-player">
    <template v-if="cover" #placeholder>
      <img :src="cover" alt="Video placeholder" class="youtube-player__cover" loading="lazy" />
    </template>
    <template #awaitingLoad>
      <div class="youtube-player__play">
        <svg viewBox="0 0 68 48" width="68" height="48" aria-hidden="true">
          <path
            d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.88 34 0 34 0S12.21.88 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.54 13.08 0 24 0 24s.54 10.92 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.12 34 48 34 48s21.79-.88 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.46 34.92 68 24 68 24s-.54-10.92-1.48-16.26z"
            fill="#f00"
          />
          <path d="M45 24 27 14v20" fill="#fff" />
        </svg>
      </div>
    </template>
  </ScriptYouTubePlayer>
</template>

<style lang="scss" scoped>
.youtube-player {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #000;
  cursor: pointer;

  :deep(img),
  &__cover {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__play {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    pointer-events: none;
    transition: opacity 0.2s ease;

    svg {
      filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
      transition: transform 0.2s ease;
    }
  }

  &:hover &__play svg {
    transform: scale(1.08);
  }
}
</style>
