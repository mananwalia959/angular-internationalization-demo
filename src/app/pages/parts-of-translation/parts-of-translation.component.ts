import { Component } from '@angular/core';

@Component({
  selector: 'app-parts-of-translation',
  standalone: true,
  imports: [],
  templateUrl: './parts-of-translation.component.html',
  styleUrl: './parts-of-translation.component.scss'
})
export class PartsOfTranslationComponent {
  code = `<div i18n="meaning here|description here @@id_here"> Different parts of translation </div>`


  codeXlf=` <trans-unit id="id_here" datatype="html">
        <source> Different parts of translation </source> 
        <context-group purpose="location"> 
          <context context-type="sourcefile">src/app/pages/parts-of-translation/parts-of-translation.component.html</context> 
          <context context-type="linenumber">10,13</context> 
        </context-group> 
        <note priority="1" from="description">description here </note> 
        <note priority="1" from="meaning">meaning here</note> 
      </trans-unit>`

      goodCodeExample = `<h1 i18n="site header|An introduction header for the Application@@introductionHeader">Hello i18n!</h1>`
}

