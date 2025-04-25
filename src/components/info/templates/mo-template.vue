<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { FeatureInfoJSON } from '@/services/info/feature-info.model'
import InfoFeatureLayout from '../info-feature-layout.vue'
import { useAlertNotificationsStore } from '@/stores/alert-notifications.store'
import { AlertNotificationType } from '@/stores/alert-notifications.store.model'

const { addNotification } = useAlertNotificationsStore()
const SHOP_URL = import.meta.env.VITE_SHOP_URL
const SHOP_IPV6_URL = import.meta.env.VITE_SHOP_IPV6_URL

defineProps<{
  layers: FeatureInfoJSON
  currentUrl?: string
}>()
const { t } = useTranslation()

const getCookie_ = function (cname: string) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      var value = c.substring(name.length, c.length)
      if (value.indexOf('"') === 0) {
        value = value.substring(1, value.length - 1)
      }
      return value
    }
  }
  return ''
}

const orderAffaire = async function (numCommune: string, numMesurage: string) {
  const isIpv6 = location.search.includes('ipv6=true')
  const urlBase = isIpv6 ? SHOP_IPV6_URL : SHOP_URL

  // Construct the URL with query parameters
  const url = `${urlBase}/Portail/commande/webservices/orderAffaireV3.jsp?numCommune=${encodeURIComponent(
    numCommune
  )}&numMesurage=${encodeURIComponent(numMesurage)}&ticket=${encodeURIComponent(
    getCookie_('appAuthtktCookieName')
  )}`

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.ok) {
      await response.json()
      addNotification(t('Fichier GML commandé.'), AlertNotificationType.INFO)
    } else {
      addNotification(
        t('Erreur lors de la commande du fichier.'),
        AlertNotificationType.ERROR
      )
    }
  } catch (error) {
    addNotification(
      t('Erreur lors de la commande du fichier.'),
      AlertNotificationType.ERROR
    )
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
