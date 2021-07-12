import { skipWaiting, clientsClaim } from 'workbox-core'
import { Prefetcher, prefetch } from '@layer0/prefetch/sw'
import DeepFetchPlugin, { DeepFetchCallbackParam } from '@layer0/prefetch/sw/DeepFetchPlugin'

skipWaiting()
clientsClaim()
new Prefetcher({
  plugins: [
    new DeepFetchPlugin([
      { /* PLP thumbnail*/
        selector: '.product-thumbnails .slick-slide img',
        maxMatches: 2,
        attribute: 'src',
        as: 'image',
      },
      { /* Homepage hero image */
        selector: '.primary-image',
        maxMatches: 1,
        attribute: 'src',
        as: 'image',
        callback: deepFetchPLPHero
      },
      {/*PDP image*/
        selector: '.product-image img',
        maxMatches: 1,
        attribute: 'src',
        as: 'image',
        callback: deepFetchPDPImages
      },
      {/*PDP thumb image*/
        selector: '.thumb-link img',
        maxMatches: 5,
        attribute: 'data-src',
        as: 'image',
        callback: deepFetchPDPImages
      },
    ]),
  ],
})
  .route()

// default helper functions that may be useful

function deepFetchPDPImages({ $el, el, $ }: DeepFetchCallbackParam) {
  const url = $el.attr('src')
}

function deepFetchPLPHero({ $el, el, $ }: DeepFetchCallbackParam) {
  const url = $el.attr('src')
  // const blurred = url.replace('c_scale,w_411', 'c_scale,w_411,q_1,e_blur:999')
  prefetch(url, 'image')
  // prefetch(blurred, 'image')
}

function logPrefetchedContent({$el}) { // for testing
  console.log("[][]][][[][]][][][][][[]][[][][]")
  console.log("content '"+$el.attr('src')+"' is being prefetched...")
  const url = $el.attr('src')
  // const blurred = url.replace('c_scale,w_411', 'c_scale,w_411,q_1,e_blur:999')
  prefetch(url, 'image')
}
