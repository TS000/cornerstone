import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import $ from 'jquery';
import FacetedSearch from './common/faceted-search';

export default class Category extends CatalogPage {
    loaded() {
        if ($('#facetedSearch').length > 0) {
            this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }
    }

    initFacetedSearch() {
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
            },
            showMore: 'category/show-more',
        };
//set number of products on category page. todo: refactor
         $(".perpage-25").on("click", () => {
            
   this.facetedSearch.requestOptions.config.category.products.limit = 25;
   this.facetedSearch.updateView();
});

         $(".perpage-50").on("click", () => {
   this.facetedSearch.requestOptions.config.category.products.limit = 50;
   this.facetedSearch.updateView();
});

         $(".perpage-100").on("click", () => {
   this.facetedSearch.requestOptions.config.category.products.limit = 100;
   this.facetedSearch.updateView();
});

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            $('html, body').animate({
                scrollTop: 0,
            }, 100);
        });
    }
}
