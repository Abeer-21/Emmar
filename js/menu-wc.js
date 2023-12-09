'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">emmar documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CartsModule.html" data-type="entity-link" >CartsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CartsModule-0174e34440c128f63d7c3fa6079108f0494da0436988844c1c970a1e51a98e4974379925b9d705a933abf00dae3af693419df18a38cacd05e40cc04a13a4b47e"' : 'data-bs-target="#xs-controllers-links-module-CartsModule-0174e34440c128f63d7c3fa6079108f0494da0436988844c1c970a1e51a98e4974379925b9d705a933abf00dae3af693419df18a38cacd05e40cc04a13a4b47e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CartsModule-0174e34440c128f63d7c3fa6079108f0494da0436988844c1c970a1e51a98e4974379925b9d705a933abf00dae3af693419df18a38cacd05e40cc04a13a4b47e"' :
                                            'id="xs-controllers-links-module-CartsModule-0174e34440c128f63d7c3fa6079108f0494da0436988844c1c970a1e51a98e4974379925b9d705a933abf00dae3af693419df18a38cacd05e40cc04a13a4b47e"' }>
                                            <li class="link">
                                                <a href="controllers/CartItemsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartItemsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/CartsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/CouponsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CouponsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PagesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ShippingMethodsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShippingMethodsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/WishlistController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WishlistController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CartsModule-0174e34440c128f63d7c3fa6079108f0494da0436988844c1c970a1e51a98e4974379925b9d705a933abf00dae3af693419df18a38cacd05e40cc04a13a4b47e"' : 'data-bs-target="#xs-injectables-links-module-CartsModule-0174e34440c128f63d7c3fa6079108f0494da0436988844c1c970a1e51a98e4974379925b9d705a933abf00dae3af693419df18a38cacd05e40cc04a13a4b47e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CartsModule-0174e34440c128f63d7c3fa6079108f0494da0436988844c1c970a1e51a98e4974379925b9d705a933abf00dae3af693419df18a38cacd05e40cc04a13a4b47e"' :
                                        'id="xs-injectables-links-module-CartsModule-0174e34440c128f63d7c3fa6079108f0494da0436988844c1c970a1e51a98e4974379925b9d705a933abf00dae3af693419df18a38cacd05e40cc04a13a4b47e"' }>
                                        <li class="link">
                                            <a href="injectables/CartItemsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartItemsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CartsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CouponsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CouponsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PagesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ShippingMethodsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShippingMethodsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/WishlistService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WishlistService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ProductsModule-e216c8e2d88875a8019eb7ae5a6144932c41a649f2a48b579b54732d9562a55e69fbee07eff536c72b08b8b3151c73057434546928be37fea57e48bf92a354cc"' : 'data-bs-target="#xs-controllers-links-module-ProductsModule-e216c8e2d88875a8019eb7ae5a6144932c41a649f2a48b579b54732d9562a55e69fbee07eff536c72b08b8b3151c73057434546928be37fea57e48bf92a354cc"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-e216c8e2d88875a8019eb7ae5a6144932c41a649f2a48b579b54732d9562a55e69fbee07eff536c72b08b8b3151c73057434546928be37fea57e48bf92a354cc"' :
                                            'id="xs-controllers-links-module-ProductsModule-e216c8e2d88875a8019eb7ae5a6144932c41a649f2a48b579b54732d9562a55e69fbee07eff536c72b08b8b3151c73057434546928be37fea57e48bf92a354cc"' }>
                                            <li class="link">
                                                <a href="controllers/CalibersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalibersController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/CategoresController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoresController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ColorsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColorsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/DiscountsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscountsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/PurchasingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PurchasingController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/StonesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StonesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/TagsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ProductsModule-e216c8e2d88875a8019eb7ae5a6144932c41a649f2a48b579b54732d9562a55e69fbee07eff536c72b08b8b3151c73057434546928be37fea57e48bf92a354cc"' : 'data-bs-target="#xs-injectables-links-module-ProductsModule-e216c8e2d88875a8019eb7ae5a6144932c41a649f2a48b579b54732d9562a55e69fbee07eff536c72b08b8b3151c73057434546928be37fea57e48bf92a354cc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-e216c8e2d88875a8019eb7ae5a6144932c41a649f2a48b579b54732d9562a55e69fbee07eff536c72b08b8b3151c73057434546928be37fea57e48bf92a354cc"' :
                                        'id="xs-injectables-links-module-ProductsModule-e216c8e2d88875a8019eb7ae5a6144932c41a649f2a48b579b54732d9562a55e69fbee07eff536c72b08b8b3151c73057434546928be37fea57e48bf92a354cc"' }>
                                        <li class="link">
                                            <a href="injectables/CalibersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalibersService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CategoresService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoresService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ColorsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColorsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DiscountsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DiscountsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PurchasingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PurchasingService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StonesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StonesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TagsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TagsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-21815c10a4c4bfd6c9129856a236985ecdb37e3dbf6661cddd803934178657f1784b152637c6d8738db7cc8e01930708823afe5e0613681e9bd5686d8f45094e"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-21815c10a4c4bfd6c9129856a236985ecdb37e3dbf6661cddd803934178657f1784b152637c6d8738db7cc8e01930708823afe5e0613681e9bd5686d8f45094e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-21815c10a4c4bfd6c9129856a236985ecdb37e3dbf6661cddd803934178657f1784b152637c6d8738db7cc8e01930708823afe5e0613681e9bd5686d8f45094e"' :
                                            'id="xs-controllers-links-module-UsersModule-21815c10a4c4bfd6c9129856a236985ecdb37e3dbf6661cddd803934178657f1784b152637c6d8738db7cc8e01930708823afe5e0613681e9bd5686d8f45094e"' }>
                                            <li class="link">
                                                <a href="controllers/AddressesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AdminsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/CitiesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CitiesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/ContactUsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactUsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/FaqsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqsController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/GovesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GovesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/StoresController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StoresController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-21815c10a4c4bfd6c9129856a236985ecdb37e3dbf6661cddd803934178657f1784b152637c6d8738db7cc8e01930708823afe5e0613681e9bd5686d8f45094e"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-21815c10a4c4bfd6c9129856a236985ecdb37e3dbf6661cddd803934178657f1784b152637c6d8738db7cc8e01930708823afe5e0613681e9bd5686d8f45094e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-21815c10a4c4bfd6c9129856a236985ecdb37e3dbf6661cddd803934178657f1784b152637c6d8738db7cc8e01930708823afe5e0613681e9bd5686d8f45094e"' :
                                        'id="xs-injectables-links-module-UsersModule-21815c10a4c4bfd6c9129856a236985ecdb37e3dbf6661cddd803934178657f1784b152637c6d8738db7cc8e01930708823afe5e0613681e9bd5686d8f45094e"' }>
                                        <li class="link">
                                            <a href="injectables/AddressesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddressesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AdminsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CitiesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CitiesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ContactUsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactUsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FacebookStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacebookStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/FaqsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GoogleStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GoogleStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GovesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GovesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/StoresService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StoresService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/AddressesEntity.html" data-type="entity-link" >AddressesEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/AdminsEntity.html" data-type="entity-link" >AdminsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CalibersEntity.html" data-type="entity-link" >CalibersEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CartItemsEntity.html" data-type="entity-link" >CartItemsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CartsEntity.html" data-type="entity-link" >CartsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CategoresEntity.html" data-type="entity-link" >CategoresEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CitiesEntity.html" data-type="entity-link" >CitiesEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ColorsEntity.html" data-type="entity-link" >ColorsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ContactUsEntity.html" data-type="entity-link" >ContactUsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/CouponsEntity.html" data-type="entity-link" >CouponsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DiscountsEntity.html" data-type="entity-link" >DiscountsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/DiscountsItemsEntity.html" data-type="entity-link" >DiscountsItemsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/FaqsEntity.html" data-type="entity-link" >FaqsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/GovesEntity.html" data-type="entity-link" >GovesEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PagesEntity.html" data-type="entity-link" >PagesEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ProductsEntity.html" data-type="entity-link" >ProductsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PurchasingEntity.html" data-type="entity-link" >PurchasingEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/PurchasingItemsEntity.html" data-type="entity-link" >PurchasingItemsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/RolesEntity.html" data-type="entity-link" >RolesEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/ShippingMethodsEntity.html" data-type="entity-link" >ShippingMethodsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/StonesEntity.html" data-type="entity-link" >StonesEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/StoresEntity.html" data-type="entity-link" >StoresEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/TagsEntity.html" data-type="entity-link" >TagsEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/UsersEntity.html" data-type="entity-link" >UsersEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/WishlistEntity.html" data-type="entity-link" >WishlistEntity</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Addresses.html" data-type="entity-link" >Addresses</a>
                            </li>
                            <li class="link">
                                <a href="classes/Admins.html" data-type="entity-link" >Admins</a>
                            </li>
                            <li class="link">
                                <a href="classes/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseController.html" data-type="entity-link" >BaseController</a>
                            </li>
                            <li class="link">
                                <a href="classes/Calibers.html" data-type="entity-link" >Calibers</a>
                            </li>
                            <li class="link">
                                <a href="classes/CartItems.html" data-type="entity-link" >CartItems</a>
                            </li>
                            <li class="link">
                                <a href="classes/Carts.html" data-type="entity-link" >Carts</a>
                            </li>
                            <li class="link">
                                <a href="classes/Categores.html" data-type="entity-link" >Categores</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoresEntity.html" data-type="entity-link" >CategoresEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangePassword.html" data-type="entity-link" >ChangePassword</a>
                            </li>
                            <li class="link">
                                <a href="classes/Cities.html" data-type="entity-link" >Cities</a>
                            </li>
                            <li class="link">
                                <a href="classes/Colors.html" data-type="entity-link" >Colors</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContactUs.html" data-type="entity-link" >ContactUs</a>
                            </li>
                            <li class="link">
                                <a href="classes/Coupons.html" data-type="entity-link" >Coupons</a>
                            </li>
                            <li class="link">
                                <a href="classes/Discounts.html" data-type="entity-link" >Discounts</a>
                            </li>
                            <li class="link">
                                <a href="classes/Faqs.html" data-type="entity-link" >Faqs</a>
                            </li>
                            <li class="link">
                                <a href="classes/ForgetPassword.html" data-type="entity-link" >ForgetPassword</a>
                            </li>
                            <li class="link">
                                <a href="classes/Goves.html" data-type="entity-link" >Goves</a>
                            </li>
                            <li class="link">
                                <a href="classes/Helper.html" data-type="entity-link" >Helper</a>
                            </li>
                            <li class="link">
                                <a href="classes/HttpExceptionFilter.html" data-type="entity-link" >HttpExceptionFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/Pages.html" data-type="entity-link" >Pages</a>
                            </li>
                            <li class="link">
                                <a href="classes/Products.html" data-type="entity-link" >Products</a>
                            </li>
                            <li class="link">
                                <a href="classes/Purchasing.html" data-type="entity-link" >Purchasing</a>
                            </li>
                            <li class="link">
                                <a href="classes/Roles.html" data-type="entity-link" >Roles</a>
                            </li>
                            <li class="link">
                                <a href="classes/ShippingMethods.html" data-type="entity-link" >ShippingMethods</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUp.html" data-type="entity-link" >SignUp</a>
                            </li>
                            <li class="link">
                                <a href="classes/Stones.html" data-type="entity-link" >Stones</a>
                            </li>
                            <li class="link">
                                <a href="classes/Stores.html" data-type="entity-link" >Stores</a>
                            </li>
                            <li class="link">
                                <a href="classes/Tags.html" data-type="entity-link" >Tags</a>
                            </li>
                            <li class="link">
                                <a href="classes/updateMyProfile.html" data-type="entity-link" >updateMyProfile</a>
                            </li>
                            <li class="link">
                                <a href="classes/Users.html" data-type="entity-link" >Users</a>
                            </li>
                            <li class="link">
                                <a href="classes/Wishlist.html" data-type="entity-link" >Wishlist</a>
                            </li>
                            <li class="link">
                                <a href="classes/WishlistEntity.html" data-type="entity-link" >WishlistEntity</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BaseService.html" data-type="entity-link" >BaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FacebookStrategy.html" data-type="entity-link" >FacebookStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GoogleStrategy.html" data-type="entity-link" >GoogleStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidationPipe.html" data-type="entity-link" >ValidationPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});