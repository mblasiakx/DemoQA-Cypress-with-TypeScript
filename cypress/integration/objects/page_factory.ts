import { BasePage } from '../objects/base_page';
import { Accordian } from '../objects/widgets/accordian';
import { DatePicker } from '../objects/widgets/data_picker';
import { Slider } from '../objects/widgets/slider';
import { PracticeForm } from '../objects/forms/practice_forms';
import { Alerts } from '../objects/alerts and frame/alerts';
import { BrowserWindows } from '../objects/alerts and frame/browser_windows';
import { Modals } from '../objects/alerts and frame/modals';
import { BrokenLinks } from '../objects/elements/broken_links';
import { CheckBox } from '../objects/elements/check_box';
import { Links } from '../objects/elements/links';
import { RadioButton } from '../objects/elements/radio_button';
import { TextBox } from '../objects/elements/text_box';
import { WebTables } from '../objects/elements/web_tables';
class PageFactory {
  get basePage() {
    return new BasePage();
  }
  get Accordian() {
    return new Accordian();
  }
  get DatePicker() {
    return new DatePicker();
  }
  get Slider() {
    return new Slider();
  }
  get PracticeForm() {
    return new PracticeForm();
  }
  get Alerts() {
    return new Alerts();
  }
  get BrowserWindows() {
    return new BrowserWindows();
  }
  get Modals() {
    return new Modals();
  }
  get BrokenLinks() {
    return new BrokenLinks();
  }
  get CheckBox() {
    return new CheckBox();
  }
  get Links() {
    return new Links();
  }
  get RadioButton() {
    return new RadioButton();
  }
  get TextBox() {
    return new TextBox();
  }
  get WebTables() {
    return new WebTables();
  }
}
export default new PageFactory();
