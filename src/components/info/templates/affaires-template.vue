<script setup lang="ts">
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import { useTranslation } from 'i18next-vue'
defineProps({
  layers: {
    type: Object as () => FeatureInfoJSON,
    required: true,
  },
  currentUrl: {
    type: String,
    required: false,
  },
})
defineEmits<{
  (e: 'export'): void
}>()
const { t } = useTranslation()
</script>
<template>
  <h1 class="lux-poi-title">{{ t(layers.layerLabel) }}</h1>
  <div
    v-for="feature in layers.features"
    :key="feature.id"
    class="lux-feature-info"
  >
    <h4>{{ feature.attributes.num_affaire }}</h4>
    {{ feature.attributes.numero }}, {{ feature.attributes.rue }}<br />
    L-{{ feature.attributes.code_postal }} {{ feature.attributes.localite
    }}<br />
    <span> {{ t('Numero') }}</span> : {{ feature.attributes.num_affaire }}<br />
    <span> {{ t('Numero cadastral') }} </span> : {{ feature.attributes.label
    }}<br />
    <span>{{ t('Geometre') }}</span> : {{ feature.attributes.geometre }}<br />
    <span>{{ t('Region') }}</span> : {{ feature.attributes.region }}<br />
    <span>{{ t('Type') }}</span> : {{ t(feature.attributes.type as string)
    }}<br />
    <span>{{ t('Statut') }}</span> : {{ t(feature.attributes.statut as string)
    }}<br />
    <span>{{ t('Date') }}</span> : {{ feature.attributes.date }}<br />
    <a
      class="fid-link no-print"
      :href="currentUrl + '&fid=' + feature.fid"
      target="_blank"
    >
      {{ t('Lien direct vers cet objet') }}</a
    ><br />
  </div>
</template>
