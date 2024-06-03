import React from 'react'
import { Link } from 'react-router-dom'
import SearchInput from '../../components/inputs/SearchInput'
import Button from '../../components/buttons/Button'
import Counter from '../../components/counter/Counter'
import CustomCounter from '../../components/counter/CustomCounter'
import RangeSlider from '../../components/range-slider/RangeSlider'
import FormInput from '../../components/inputs/FormInput'
import ButtonWithIcon from '../../components/buttons/ButtonWithIcon'
import { addOutline, checkmarkCircle, trash } from 'ionicons/icons'

export default function FormAdvancedPage() {
    return (
        <div className='h-full w-full'>
            <p className='text-2xl'>Form Advanced</p>

            <div className="text-sm ds-breadcrumbs">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Form Advanced</li>
                </ul>
            </div>

            <div className="m-3">
                <div className="flex items-center gap-2 w-fit ml-auto mr-0">
                    <SearchInput placeholder="Search" />
                    
                    <div className="ds-dropdown ds-dropdown-end flex-auto">
                        <Button btnClass="ds-btn-secondary items-center leading-none w-36" bgIcon={false} btnTxt="Advanced Search" />

                        <div tabIndex="0"
                            className="ds-dropdown-content z-[99] mt-4 p-3 px-4 bg-dropdown drop-shadow-main rounded-box w-screen mr-[-7vw] md:mr-0 md:w-[450px] overflow-hidden">
                            <label className="ds-label">
                                <span className="ds-label-text">Select fields</span>
                            </label>

                            {/* <!-- **** input fields **** --> */}
                            <div className="flex flex-col gap-2">
                                <div className="flex gap-2 items-center">
                                    <div className="grid grid-cols-2 gap-2 flex-auto">
                                        <div className="ds-form-control w-full">
                                            <select className="ds-select">
                                                <option defaultValue={'Pick one'} disabled selected>Pick one</option>
                                                <option defaultValue={'Product'}>Product</option>
                                                <option defaultValue={'Product'}>Product</option>
                                                <option defaultValue={'Product'}>Product</option>
                                                <option defaultValue={'Product'}>Product</option>
                                                <option defaultValue={'Product'}>Product</option>
                                            </select>
                                        </div>

                                        <FormInput
                                            id={'default'}
                                            name={'default'}
                                            type={'text'}
                                            defaulValue={'default'}
                                            placeholder={'Type Here'}
                                            status={'default'}
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <ButtonWithIcon btnClass="ds-btn-square ds-btn-sm ds-btn-neutral" iconClass="text-md" ionIcon={addOutline} />
                                        <ButtonWithIcon btnClass="ds-btn-square ds-btn-sm ds-btn-error-light" iconClass="text-md" ionIcon={trash} />
                                    </div>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <div className="grid grid-cols-2 gap-2 flex-auto">
                                        <div className="ds-form-control w-full">
                                            <select className="ds-select">
                                                <option defaultValue={'Pick one'} disabled selected>Pick one</option>
                                                <option defaultValue={'Product'}>Product</option>
                                                <option defaultValue={'Product'}>Product</option>
                                                <option defaultValue={'Product'}>Product</option>
                                                <option defaultValue={'Product'}>Product</option>
                                                <option defaultValue={'Product'}>Product</option>
                                            </select>
                                        </div>

                                        <FormInput
                                            id={'default'}
                                            name={'default'}
                                            type={'text'}
                                            defaulValue={'default'}
                                            placeholder={'Type Here'}
                                            status={'default'}
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <ButtonWithIcon btnClass="ds-btn-square ds-btn-sm ds-btn-neutral" iconClass="text-md" ionIcon={addOutline} />
                                        <ButtonWithIcon btnClass="ds-btn-square ds-btn-sm ds-btn-error-light" iconClass="text-md" ionIcon={trash} />
                                    </div>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <div className="grid grid-cols-2 gap-2 flex-auto">
                                        <div className="ds-form-control w-full">
                                            <select className="ds-select">
                                                <option defaultValue={'Pick one'} disabled selected>Pick one</option>
                                                <option defaultValue={'Product'}>Product</option>
                                                <option defaultValue={'Product'}>Product</option>
                                                <option defaultValue={'Product'}>Product</option>
                                                <option defaultValue={'Product'}>Product</option>
                                                <option defaultValue={'Product'}>Product</option>
                                            </select>
                                        </div>

                                        <FormInput
                                            id={'default'}
                                            name={'default'}
                                            type={'text'}
                                            defaulValue={'default'}
                                            placeholder={'Type Here'}
                                            status={'default'}
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <ButtonWithIcon btnClass="ds-btn-square ds-btn-sm ds-btn-neutral" iconClass="text-md" ionIcon={addOutline} />
                                        <ButtonWithIcon btnClass="ds-btn-square ds-btn-sm ds-btn-error-light" iconClass="text-md" ionIcon={trash} />
                                    </div>
                                </div>
                            </div>

                            {/* <!-- ***** action buttons ***** --> */}
                            <div className="w-full mt-4 flex items-center justify-between gap-2">
                                <button className="text-secondary font-tertiary text-sm">Clear All</button>
                                <div className="flex gap-2">

                                    <a className='flex-auto md:flex-none'>
                                        <Button btnClass="modal-close ds-btn-neutral" btnTxt="Cancel" />
                                    </a>
                                    <ButtonWithIcon onclick="upload_success_modal.showModal()" type="submit"
                                        btnClass="modal-close ds-btn-success flex-auto md:flex-none"
                                        btnTxt="Save" 
                                        iconClass="icon -mt-0.5"
                                        ionIcon={checkmarkCircle}
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="m-3">
                <h2 className="text-xl mb-2">Select Forms</h2>
                <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-3">
                    <div className="ds-form-control w-full">
                        <label className="ds-label">
                            <span className="ds-label-text">Select2 with Search</span>
                        </label>
                        <select className="ds-select select--select2">
                            <option disabled selected>Pick one</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>
                    </div>
                    <div className="ds-form-control w-full">
                        <label className="ds-label">
                            <span className="ds-label-text">Multi-select</span>
                        </label>
                        <select className="ds-select select--select2" multiple="multiple">
                            <option disabled selected>Pick one</option>
                            <option>Star Wars</option>
                            <option>Harry Potter</option>
                            <option>Lord of the Rings</option>
                            <option>Planet of the Apes</option>
                            <option>Star Trek</option>
                        </select>
                    </div>
                    <div className="ds-form-control w-full">
                        <label className="ds-label">
                            <span className="ds-label-text">Option Groups</span>
                        </label>
                        <select className="ds-select select--select2">
                            <optgroup label="Residents">
                                <option>Meredith Gray</option>
                                <option>Alex Karev</option>
                                <option>Jackson Avery</option>
                            </optgroup>
                            <optgroup label="Attending">
                                <option>Derek Sheperd</option>
                                <option>Mark Sloan</option>
                                <option>Arizona Robbins</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
            </div>

            <div className="m-3">
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="w-full">
                        <h2 className="text-xl mb-2">Counter</h2>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div>
                                <Counter 
                                    title="Default"

                                    defaultValue={''}
                                    placeholder={'0'}
                                    label="Note: You can insert a small bottom label here."
                                />

                                <Counter 
                                    title="Disabled"

                                    defaultValue={''}
                                    placeholder={'306'}
                                    label="Note: You can insert a small bottom label here."
                                    disabled={true}
                                />
                            </div>
                            <div>
                                <CustomCounter defaulValue="0" title={'Custom Counter'} />
                                <CustomCounter title={'Disabled'} disabled={true}/>
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <h2 className="text-xl mb-2">Range slider</h2>
                        
                        <div className="grid md:grid-cols-2 gap-3">
                            <div>
                                <RangeSlider
                                    title="Primary"
                                    
                                    rngClass="ds-range-primary"
                                    defaultValue={'40'}
                                />

                                <RangeSlider
                                    title="Primary"

                                    step="25"
                                    rngClass="ds-range-primary"
                                    withMeasure={true}
                                    defaultValue={'25'}
                                />
                            </div>

                            <div>
                                <RangeSlider
                                    title="Semantic"

                                    rngClass="ds-range-info"
                                    defaultValue={'20'}
                                />

                                <RangeSlider

                                    rngClass="ds-range-success"
                                    defaultValue={'40'}
                                />

                                <RangeSlider

                                    rngClass="ds-range-warning"
                                    defaultValue={'60'}
                                />

                                <RangeSlider

                                    rngClass="ds-range-error"
                                    defaultValue={'80'}
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
