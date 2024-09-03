import Point from 'ol/geom/Point.js'

import featureHash from './FeatureHash'

describe('read and decode features', () => {
  const url =
    "Fa(bse9-fs65Hp-w_d!d_Dm_u!s_!a*~display_order*0'd*'__refreshProfile__*false'a*0'c*#ed1c24'e*1'i*false'l*plain'n*Polygone 1'o*0.2'r*false's*circle't*10'u*false)a(yxe9-ht65H8Dt_h_g*y!1-~display_order*1'd*'__refreshProfile__*false'a*0'c*#1dcaed'e*1'i*false'l*plain'n*Polygone 2'o*1'r*false's*circle't*10'u*false)a(yqe9-nq65Hf*sLeEe*n_jCK2_-c_~display_order*2'd*'__refreshProfile__*false'a*0'c*#2a1ded'e*4'i*false'l*plain'n*Polygone 3'o*0.48'r*false's*circle't*10'u*false)a(hqe9-9n65H.N!L!L!LCJCLEHGHGHIFIDIDKBK*M_K.K.K-M!IAKCICIEGGGGEGCKAIAK!K-K-M_K_K*KBKBKDIFIHGHEJEJELAJAN!L-L-L_N_L*LBJBJFJFHFHHFJDJDL*L*L*L~display_order*5'__refreshProfile__*false'd*'a*0'c*#ed1c24'e*1'i*false'l*plain'n*Kreis 6'o*0.2's*circle't*10'u*true'r*false)p(s1e9-1f65H~display_order*6'__refreshProfile__*false'd*'a*0'c*#ed1c24'e*1.25'i*true'l*plain'n*Mon Label'o*0.2's*circle't*26'u*false'r*false)p(1yd9-ut65H~display_order*7'__refreshProfile__*false'd*'a*-0.8726646259971648'c*#1ded2a'e*1.25'i*true'l*plain'n*Mon Label'o*0.2's*circle't*23'u*false'r*false)"
  it('test decoding', () => {
    expect(true)
    const features = featureHash.readFeatures(url)
    features.forEach((f, i) => {
      featureHash.decodeShortProperties(f, i)
    })
    expect(features.length).to.equal(6)
    const circles = features.filter(f => f.get('isCircle'))
    expect(circles.length).to.equal(1)
    expect(circles[0].get('color')).to.equal('#ed1c24')
    expect(
      features.find(f => f.get('name') === 'Polygone 1')?.get('color')
    ).to.equal('#ed1c24')
    expect(
      features.find(f => f.get('name') === 'Polygone 2')?.get('color')
    ).to.equal('#1dcaed')
    const p3 = features.find(f => f.get('name') === 'Polygone 3')
    expect(p3?.get('color')).to.equal('#2a1ded')
    expect(p3?.get('stroke')).to.equal(4)
    expect(p3?.get('opacity')).to.equal(0.48)

    const labels = features.filter(f => f.get('geometry') instanceof Point)
    expect(labels.length).to.equal(2)
    expect(labels.find(f => f.get('angle') == 0)?.get('color')).to.equal(
      '#ed1c24'
    )
    expect(labels.find(f => f.get('angle') < 0)?.get('color')).to.equal(
      '#1ded2a'
    )
  })
})
