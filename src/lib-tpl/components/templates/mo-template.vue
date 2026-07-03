<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { FeatureInfoJSON } from '../../models'
import InfoFeatureLayout from '../layouts/info-feature-layout.vue'
import { useLuxTplContext } from '../../context'

const { config, notify } = useLuxTplContext()
const SHOP_URL = config.shopUrl
const SHOP_IPV6_URL = config.shopIpv6Url

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
const { t } = useTranslation('tooltips')

const orderAffaire = async function (numCommune: string, numMesurage: string) {
  const isIpv6 = location.search.includes('ipv6=true')
  const urlBase = isIpv6 ? SHOP_IPV6_URL : SHOP_URL

  const url = `${urlBase}/Portail/commande/webservices/orderAffaireV3.jsp?numCommune=${encodeURIComponent(
    numCommune
  )}&numMesurage=${encodeURIComponent(numMesurage)}&ticket=`

  try {
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.ok) {
      const text = await response.text()
      if (text.includes('ok')) {
        notify(t('Fichier GML commandé.'), 'info')
      } else {
        notify(t('Erreur lors de la commande du fichier.'), 'error')
      }
    } else {
      notify(t('Erreur lors de la commande du fichier.'), 'error')
    }
  } catch (error) {
    notify(t('Erreur lors de la commande du fichier.'), 'error')
  }
}
</script>

<template>
  <InfoFeatureLayout :layers="layers" :currentUrl="currentUrl">
    <template #feature-content="{ feature }">
      <h3>{{ feature.attributes.K_MEASUREMENTID }}</h3>
      <span>{{ t('Affaire') }}</span> : {{ feature.attributes.K_MEASUREMENTID
      }}<br />
      <span>{{ t('Commune administrative') }}</span> :
      {{ feature.attributes.K_NOM_COMMUNE_ADMINISTRATIVE }}<br />
      <span>{{ t('Commune cadastrale') }}</span> :
      {{ feature.attributes.K_NOM_COMMUNE_CADASTRALE }}<br />
      <span>{{ t('Mesurage') }}</span> :
      {{ feature.attributes.K_MEASUREMENTNUMBER }}<br />
      <button
        class="lux-btn-grey"
        @click="
          orderAffaire(
            feature.attributes.K_KATASTERGEMEINDE,
            feature.attributes.K_MEASUREMENTNUMBER
          )
        "
      >
        {{ t('Commander fichier GML') }}
      </button>
    </template>
  </InfoFeatureLayout>
</template>
