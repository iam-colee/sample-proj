import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../components/buttons/Button'
import ButtonOutline from '../components/buttons/ButtonOutline'
import ButtonWithIcon from '../components/buttons/ButtonWithIcon'

export default function StyleGuide() {
    const styleLinks = [
        { linkName: 'Colors', linkPath: '#section-colors' },
        { linkName: 'Typography', linkPath: '#section-typo' },
        { linkName: 'Buttons', linkPath: '#section-buttons' },
        { linkName: 'Form Inputs', linkPath: '#section-form' },
        { linkName: 'Badge', linkPath: '#section-badge' },
        { linkName: 'Tabs', linkPath: '#section-tabs' },
        { linkName: 'Alerts', linkPath: '#section-alerts' },
    ]

    //COLORS
    const colorPalletes = [
        {
            colorType: 'Primary',
            colors: [
                { colorName: 'primary', colorClass: 'bg-primary'},
                { colorName: 'primary-focus', colorClass: 'bg-primary-focus'},
                { colorName: 'secondary', colorClass: 'bg-secondary'},
                { colorName: 'secondary-focus', colorClass: 'bg-secondary-focus'},
                { colorName: 'accent', colorClass: 'bg-accent'},
                { colorName: 'accent-focus', colorClass: 'bg-accent-focus'},
            ]
        },
        {
            colorType: 'Neutral',
            colors: [
                { colorName: 'neutral', colorClass: 'bg-neutral'},
                { colorName: 'neutral-focus', colorClass: 'bg-neutral-focus'},
                { colorName: 'neutral-content', colorClass: 'bg-neutral-content'},
                { colorName: 'base-100', colorClass: 'bg-base-100'},
                { colorName: 'base-200', colorClass: 'bg-base-200'},
                { colorName: 'base-300', colorClass: 'bg-base-300'},
            ]
        },
        {
            colorType: 'Semantic',
            colors: [
                { colorName: 'info', colorClass: 'bg-info'},
                { colorName: 'success', colorClass: 'bg-success'},
                { colorName: 'warning', colorClass: 'bg-warning'},
                { colorName: 'error', colorClass: 'bg-error'},
            ]
        }
    ]

    return (
        <div>
            <main className="2xl:container max-w-screen-2xl mx-auto h-full p-2 mt-5 flex flex-col md:flex-row">
                <aside className="h-full md:w-2/5 lg:w-1/5 py-3">
                    <div className="md:sticky">
                        <h1 className="text-3xl text-primary">Styleguide</h1>
                        <nav className="px-3 m-2 border-l-2 border-slate-200">
                            <ul className="flex flex-col space-y-1">
                                {styleLinks.map((styleLink)=>(
                                    <li key={styleLink.linkName}>
                                        <Link to={styleLink.linkPath} className="font-tertiary text-gray-500 hover:text-gray-800">
                                            {styleLink.linkName}
                                        </Link>
                                    </li>
                                ))}    
                            </ul>
                        </nav>
                            
                        <a href="https://daisyui.com/components/" target="_blank" className='ds-btn ds-btn-primary ds-btn-xs my-2'>
                            View All 🏵️ DaisyUI Components
                        </a>
                    </div>
                </aside>

                {/* MAIN */}
                <main className="md:w-3/5 lg:w-11/12 rounded border-solid border border-gray-300 bg-slate-50 py-3 px-4">
                    {/* <!-- Colors & Typography --> */}
                    <div className="container flex flex-col lg:flex-row lg:gap-3 mb-6">
                        <section className="lg:w-1/2" id="section-colors">
                            <h2 className="text-2xl text-primary">Colors</h2>

                            {colorPalletes.map((colorPallete) => (
                                <div className='flex flex-col' key={colorPallete.colorType}>
                                    <h3 className="my-2 text-lg font-tertiary">{colorPallete.colorType}</h3>
                                
                                    <ul className="flex flex-wrap space-x-4">
                                        {colorPallete.colors.map((color) => (
                                            <li className="w-[60px]" key={color.id}>
                                                <div className={`${color.colorClass} aspect-square w-[60px] h-[60px] rounded-md mx-auto`}></div>
                                                <span className="block text-xs text-gray-700 text-center">{color.colorName}</span>
                                            </li>
                                        ))} 
                                    </ul>
                                </div>
                            ))}
                        </section>

                        <section className="lg:w-1/2" id="section-typo">
                            <h2 className="text-2xl text-primary">Typography</h2>

                            <div className="flex flex-wrap w-100">
                                <div className="my-2 xl:w-1/2">
                                    <p className="text-sm">text-sm</p>
                                    <p className="text-base">text-base</p>
                                    <p className="text-lg">text-lg</p>
                                    <p className="text-xl">text-xl</p>
                                    <p className="text-2xl">text-2xl</p>
                                    <p className="text-3xl">text-3xl</p>
                                    <p className="text-4xl">text-4xl</p>
                                    <p className="text-5xl">text-5xl</p>
                                </div>

                                <div className="my-2 xl:w-1/2">
                                    <p className="font-primary mb-2">
                                        <span className="text-xs font-mono text-gray-600 block">font-primary</span>
                                        Manrope Bold
                                    </p>

                                    <p className="font-secondary mb-2">
                                        <span className="text-xs font-mono text-gray-600 block">font-secondary</span>
                                        Manrope Regular
                                    </p>

                                    <p className="font-tertiary mb-2">
                                        <span className="text-xs font-mono text-gray-600 block">font-tertiary</span>
                                        Manrope Medium
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* <!-- Buttons --> */}
                    <section className="container mb-6" id="section-buttons">
                        <h2 className="text-2xl text-primary">Buttons</h2>

                        <div className="flex flex-col lg:flex-row gap-3">
                            <div className="lg:w-1/2">
                                <div className="my-2 flex flex-wrap gap-4">
                                    <Button btnTxt="Button" />
                                    <Button btnClass="ds-btn-primary" btnTxt="Primary"/>
                                    <Button btnClass="ds-btn-secondary" btnTxt="Secondary"/>
                                    <Button btnClass="ds-btn-accent" btnTxt="Accent"/>
                                    <Button btnClass="ds-btn-neutral" btnTxt="Neutral"/>
                                    <Button btnClass="ds-btn-info" btnTxt="Info"/>
                                    <Button btnClass="ds-btn-success" btnTxt="Success"/>
                                    <Button btnClass="ds-btn-warning" btnTxt="Warning"/>
                                    <Button btnClass="ds-btn-error" btnTxt="Error"/>
                                    <Button btnClass="ds-btn-ghost" btnTxt="Ghost"/>
                                    <Button btnClass="ds-btn-light" btnTxt="Light"/>
                                    <Button btnClass="ds-btn-link text-info" btnTxt="Link"/>
                                    <Button btnTxt="Disabled using attribute" disabled={true}/>
                                    <Button btnClass="ds-btn-disabled" btnTxt="Disabled using className name" tabindex="-1" role="button" aria-disabled="true" />
                                </div>

                                <h3 className="my-2 text-lg font-tertiary">Outline</h3>
                                
                                <div className="flex flex-wrap gap-4">
                                    <ButtonOutline btnTxt="Button" />
                                    <ButtonOutline btnClass="ds-btn-primary" btnTxt="Button"/>
                                    <ButtonOutline btnClass="ds-btn-primary" btnTxt="Info"/>
                                    <ButtonOutline btnClass="ds-btn-success" btnTxt="Success"/>
                                    <ButtonOutline btnClass="ds-btn-warning" btnTxt="Warning"/>
                                    <ButtonOutline btnClass="ds-btn-error" btnTxt="Error"/>
                                </div>
                            </div>

                            <div className="lg:w-1/2">
                                <h3 className="my-2 text-lg font-tertiary">Sizes</h3>
                                
                                <div className="flex flex-wrap items-center gap-4">
                                    <ButtonOutline btnClass="ds-btn-primary ds-btn-lg" btnTxt="Large" />
                                    <ButtonOutline btnClass="ds-btn-primary" btnTxt="Normal" />
                                    <ButtonOutline btnClass="ds-btn-primary ds-btn-sm" btnTxt="Small" />
                                    <ButtonOutline btnClass="ds-btn-primary ds-btn-xs" btnTxt="Tiny" />
                                    <ButtonOutline btnClass="ds-btn-primary ds-btn-wide" btnTxt="Wide" />
                                    <ButtonOutline btnClass="ds-btn-primary ds-btn-block" btnTxt="Block / Full width" />
                                </div>

                                <h3 className="my-2 text-lg font-tertiary">With icon</h3>
                                
                                <div className="flex flex-wrap items-center gap-4">
                                    <ButtonWithIcon btnClass="ds-btn-square" iconClass="text-base" fontAwesome="fa-solid fa-x" />
                                    <ButtonWithIcon btnClass="ds-btn-square ds-btn-outline" iconClass="text-base" fontAwesome="fa-solid fa-x" />
                                    <ButtonWithIcon btnClass="ds-btn-circle" iconClass="text-base" fontAwesome="fa-solid fa-x" />
                                    <ButtonWithIcon btnClass="ds-btn-circle ds-btn-outline" iconClass="text-base" fontAwesome="fa-solid fa-x" />
                                    <ButtonWithIcon btnClass="ds-btn-square ds-loading" iconClass="text-base" />
                                    <ButtonWithIcon btnClass="ds-loading" iconClass="text-base" btnTxt="Loading" />
                                    <ButtonWithIcon btnClass="gap-2" iconClass="text-base" btnTxt="button" fontAwesome="fa-solid fa-heart"/>
                                    <ButtonWithIcon btnClass="ds-btn-outline gap-2 flex-row-reverse" iconClass="text-base" btnTxt="button" fontAwesome="fa-solid fa-heart"/>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </main>
        </div>
      )
    }
