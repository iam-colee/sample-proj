import React from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../../components/inputs/FormInput'
import { alertCircleOutline, map, person } from 'ionicons/icons'
import SearchInput from '../../components/inputs/SearchInput'
import Textarea from '../../components/inputs/Textarea'
import SelectForm from '../../components/inputs/SelectForm'
import FormInputIcon from '../../components/inputs/FormInputIcon'
import DatePicker from '../../components/date/DatePicker'
import PickFile from '../../components/inputs/PickFile'
import FileUpload from '../../components/inputs/FileUpload'
import Checkbox from '../../components/checkboxes/Checkbox'
import RadioButton from '../../components/radio-button/RadioButton'
import ToggleSwitch from '../../components/switch/ToggleSwitch'

export default function FormBasicPage() {

    return (
        <div className='h-full w-full'>
            <p className='text-2xl'>Form Basic Elements</p>

            <div className="text-sm ds-breadcrumbs">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Basic Elements</li>
                </ul>
            </div>

            {/* Simple Forms */}
            <div className="m-3">
                <h2 className="text-xl mb-2">Simple Forms</h2>
                <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-3">

                    {/* DEFAULT */}
                    <FormInput
                        title={'Default'}

                        id={'default'}
                        name={'default'}
                        type={'text'}
                        defaulValue={'default'}
                        placeholder={'Type Here'}
                        status={'default'}
                        icon={alertCircleOutline}
                        message={'Note: You can insert a small bottom label here'}
                    />

                    {/* ERROR */}
                    <FormInput
                        title={'Error'}

                        id={'error'}
                        name={'error'}
                        type={'text'}
                        defaulValue={'error'}
                        placeholder={'Type Here'}
                        status={'error'}
                        icon={alertCircleOutline}
                        message={'Error Message here'}
                    />

                    {/* SUCCESS */}
                    <FormInput
                        title={'Success'}

                        id={'success'}
                        name={'success'}
                        type={'text'}
                        defaulValue={'success'}
                        placeholder={'Type Here'}
                        status={'success'}
                        icon={alertCircleOutline}
                        message={'Success Message Here'}
                    />

                    {/* DISABLED */}
                    <FormInput 
                        title={'Disabled'}

                        id={'disabled'}
                        name={'disabled'}
                        type={'text'}
                        defaulValue={'disabled'}
                        placeholder={'Disabled'}
                        status={''}
                        icon={alertCircleOutline}
                        disabled={true}
                    />

                    {/* SEARCH iNPUT */}
                    <SearchInput 
                        title={'Button Addon'}
                        placeholder="Search"
                    />

                    {/* TEXTAREA */}
                    <Textarea
                        title={'Textarea'} 
                        defaulValue={'default'}
                        placeholder={'Your thoughts here'}
                    />

                    {/* TEXTAREA DISABLED */}
                    <Textarea
                        title={'Textarea (Disabled)'} 
                        defaulValue={'default'}
                        placeholder={'Your thoughts here'}
                        disabled={true}
                    />
                </div>
            </div>

            {/* Select Forms */}
            <div className="m-3">
                <h2 className="text-xl mb-2">Select Forms</h2>
                <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-3">

                    {/* DEFAULT */}
                    <SelectForm 
                        title={'Default'}

                        message={'Note: You can insert a small bottom label here.'}
                    />
                </div>
            </div>

            {/* With Icons */}
            <div className=" m-3">
                <h2 className="text-xl mb-2">With Icons</h2>

                <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-3">

                    {/* LEFT */}
                    <FormInputIcon 
                        title={'Left'}
                        icon={person}

                        id={'left'}
                        name={'left'}
                        type={'text'}
                        defaulValue={'left'}
                        placeholder={'Type here'}
                        status={''}
                        message={'Note: You can insert a small bottom label here.'}
                    />

                    {/* RIGHT */}
                    <FormInput
                        title={'Right'}

                        id={'right'}
                        name={'right'}
                        type={'password'}
                        defaulValue={'right'}
                        placeholder={'Type Here'}
                        status={''}
                        icon={alertCircleOutline}
                        message={''}
                    />

                    {/* COLORED ICON */}
                    <FormInputIcon 
                        title={'Colored Icon'}

                        id={'colored-icon'}
                        name={'colored-icon'}
                        type={'text'}
                        defaulValue={'colored-icon'}
                        placeholder={'Type Here'}
                        status={''}
                        icon={map}
                        iconBgTransparent={true}
                        message={''}
                    />
                </div>
            </div>

            {/* Date Pickers And File Upload */}
            <div className="m-3">
                <h2 className="text-xl mb-2">Date Pickers And File Upload</h2>
                <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-3">

                    <DatePicker 
                        title={'Date Picker'}
                    />

                    <PickFile 
                        title={'Pick a file'}
                    />

                    <FileUpload 
                        title={'File Upload'}
                        message={'Supported format: XLS'}
                    />
                </div>
            </div>

            <div className="m-3">
                <h2 className="text-xl mb-2">Custom Controls</h2>
                <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-3">

                    {/* CHECKBOXES */}
                    <div>
                        <div className="flex flex-col gap-0">
                            <h3 className="text-tertiary text-base font-tertiary">Checkboxes</h3>
                            <Checkbox setVal={''} chckTxt="Unchecked"  />
                            <Checkbox setVal={''} chckTxt="Checked" defaultChecked={true} />
                            <Checkbox setVal={''} chckTxt="Disabled unchecked" disabled={true}  />
                            <Checkbox setVal={''} chckTxt="Disabled Checked" defaultChecked={true} disabled={true} />
                        </div>

                        <div>
                            <h3 className="text-tertiary text-base font-tertiary">Colored Checkboxes</h3>
                            <Checkbox setVal={''} status="info" chckTxt="Info" defaultChecked={true} />
                            <Checkbox setVal={''} status="success" chckTxt="Success" defaultChecked={true} />
                            <Checkbox setVal={''} status="warning" chckTxt="Warning" defaultChecked={true} />
                            <Checkbox setVal={''} status="error" chckTxt="Danger" defaultChecked={true} />
                        </div>
                    </div>

                    {/* RADIO BUTTONS */}
                    <div className="flex flex-col gap-3">
                        <div>
                            <h3 className="text-tertiary text-base font-tertiary">Radio Buttons</h3>
                            <RadioButton name="" rdBtn="Unchecked" />
                            <RadioButton name="" rdBtn="Checked" defaultChecked={true} />
                            <RadioButton name="" rdBtn="Disabled Unchecked" disabled={true} />
                            <RadioButton name="" rdBtn="Disabled Checked" defaultChecked={true} disabled={true} />
                        </div>

                        <div>
                            <h3 className="text-tertiary text-base font-tertiary">Colored Radio Buttons</h3>
                            <RadioButton status="info" name="" rdBtn="Info"/>
                            <RadioButton status="success" name="" rdBtn="Success"/>
                            <RadioButton status="warning" name="" rdBtn="Warning"/>
                            <RadioButton status="error"name="" rdBtn="danger" defaultChecked={true}/>
                        </div>
                    </div>

                    {/* TOGGLE BUTTON */}
                    <div className="flex flex-col gap-3">
                        <div className='flex flex-col gap-y-3'>
                            <h3 className="text-tertiary text-base font-tertiary">Toggle</h3>
                            <ToggleSwitch switchClass="ds-toggle-primary" id="switch1" name="switch1" htmlFor="switch1" switchTxt="Unchecked" />
                            <ToggleSwitch switchClass="ds-toggle-primary" id="switch2" name="switch2" htmlFor="switch2" switchTxt="Checked" defaultChecked={true}/>
                        </div>

                        <div className='flex flex-col gap-y-3'>
                            <h3 className="text-tertiary text-base font-tertiary">Colored Toggle</h3>
                            <ToggleSwitch switchClass="ds-toggle-info" id="switch1" name="switch1" htmlFor="switch1" switchTxt="Info" defaultChecked={true}/>
                            <ToggleSwitch switchClass="ds-toggle-success" id="switch2" name="switch2" htmlFor="switch2" switchTxt="Success" defaultChecked={true}/>
                            <ToggleSwitch switchClass="ds-toggle-warning" id="switch3" name="switch3" htmlFor="switch3" switchTxt="Warning" defaultChecked={true}/>
                            <ToggleSwitch switchClass="ds-toggle-error" id="switch4" name="switch4" htmlFor="switch4" switchTxt="Danger" defaultChecked={true}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
