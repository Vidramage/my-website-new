import { Injectable } from '@angular/core'

@Injectable()
export class ImageService {
  //ImageService class contains two methods which help us retrieve either all, or an instance of one of the images that are inside the array object
  visibleImages = [];
  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id == id)
  }
}

//this could be replaced by something that makes a call to a database and retrieves an array of json objects
const IMAGES = [
  {"id": 1, "category": "technology", "caption": "Microsoft - Special Olympics 2017", "url": "assets/img/ms_special_olympics.jpg", "pskills": "Design (UI/UX), Interactive Accessibility (ARIA/WCAG 2.0), Vanilla Javascript + jQuery, HTML5, CSS3, Git, Wordpress, Azure, Visual Studio Code, NVDA, JAWS, ChromeVox", "presults": "", "pdata":"", "pdetails": "While collaborating with Microsoft's Elite Accessibilty Development team and developing on Wordpress using tools such as NVDA, JAWS, ChromeVox, VS Code, and other ARIA testing tools, I was able to provide handicapped users and regular users alike with a lovely experience that would allow each person to experience and navigate all areas of the website while maintaining a high level of accessibility compliance standards."},
  {"id":2, "category": "technology", "caption": "American Telemedicine Association", "url":"assets/img/ATA.jpg", "pskills": "Design (UI/UX), Interactive Accessibility (ARIA/WCAG 2.0), Vanilla Javascript + jQuery, HTML5, CSS3, Git, Wordpress, Azure, Visual Studio Code, NVDA, JAWS, ChromeVox", "presults": "", "pdata":"", "pdetails": "While collaborating with Microsoft's Elite Accessibilty Development team and developing on Wordpress using tools such as NVDA, JAWS, ChromeVox, VS Code, and other ARIA testing tools, I was able to provide handicapped users and regular users alike with a lovely experience that would allow each person to experience and navigate all areas of the website while maintaining a high level of accessibility compliance standards."},
  {"id":3, "category": "education", "caption": "Columbia Business School", "url":"assets/img/CBS.jpg", "pskills": "Design (UI/UX), Interactive Accessibility (ARIA/WCAG 2.0), Vanilla Javascript + jQuery, HTML5, CSS3, Git, Wordpress, Azure, Visual Studio Code, NVDA, JAWS, ChromeVox", "presults": "", "pdata":"", "pdetails": "While collaborating with Microsoft's Elite Accessibilty Development team and developing on Wordpress using tools such as NVDA, JAWS, ChromeVox, VS Code, and other ARIA testing tools, I was able to provide handicapped users and regular users alike with a lovely experience that would allow each person to experience and navigate all areas of the website while maintaining a high level of accessibility compliance standards."},
  {"id":4, "category": "technology", "caption": "Rently Real Estate Service", "url":"assets/img/Rently_Home_information.jpg", "pskills": "Design (UI/UX), Interactive Accessibility (ARIA/WCAG 2.0), Vanilla Javascript + jQuery, HTML5, CSS3, Git, Wordpress, Azure, Visual Studio Code, NVDA, JAWS, ChromeVox", "presults": "", "pdata":"", "pdetails": "While collaborating with Microsoft's Elite Accessibilty Development team and developing on Wordpress using tools such as NVDA, JAWS, ChromeVox, VS Code, and other ARIA testing tools, I was able to provide handicapped users and regular users alike with a lovely experience that would allow each person to experience and navigate all areas of the website while maintaining a high level of accessibility compliance standards."},
  {"id":5, "category": "education", "caption": "American Wine Society", "url":"assets/img/AWS.jpg", "pskills": "Design (UI/UX), Interactive Accessibility (ARIA/WCAG 2.0), Vanilla Javascript + jQuery, HTML5, CSS3, Git, Wordpress, Azure, Visual Studio Code, NVDA, JAWS, ChromeVox", "presults": "", "pdata":"", "pdetails": "While collaborating with Microsoft's Elite Accessibilty Development team and developing on Wordpress using tools such as NVDA, JAWS, ChromeVox, VS Code, and other ARIA testing tools, I was able to provide handicapped users and regular users alike with a lovely experience that would allow each person to experience and navigate all areas of the website while maintaining a high level of accessibility compliance standards."},
  {"id":6, "category": "education", "caption": "BEDA - Binge Eating Disorder Association", "url":"assets/img/BEDA.jpg", "pskills": "Design (UI/UX), Interactive Accessibility (ARIA/WCAG 2.0), Vanilla Javascript + jQuery, HTML5, CSS3, Git, Wordpress, Azure, Visual Studio Code, NVDA, JAWS, ChromeVox", "presults": "", "pdata":"", "pdetails": "While collaborating with Microsoft's Elite Accessibilty Development team and developing on Wordpress using tools such as NVDA, JAWS, ChromeVox, VS Code, and other ARIA testing tools, I was able to provide handicapped users and regular users alike with a lovely experience that would allow each person to experience and navigate all areas of the website while maintaining a high level of accessibility compliance standards."},
  {"id":7, "category": "architecture", "caption": "AIASF - American Institute of Architecture San-Francisco", "url":"assets/img/AIASF.jpg", "pskills": "Design (UI/UX), Interactive Accessibility (ARIA/WCAG 2.0), Vanilla Javascript + jQuery, HTML5, CSS3, Git, Wordpress, Azure, Visual Studio Code, NVDA, JAWS, ChromeVox", "presults": "", "pdata":"", "pdetails": "While collaborating with Microsoft's Elite Accessibilty Development team and developing on Wordpress using tools such as NVDA, JAWS, ChromeVox, VS Code, and other ARIA testing tools, I was able to provide handicapped users and regular users alike with a lovely experience that would allow each person to experience and navigate all areas of the website while maintaining a high level of accessibility compliance standards."},
  {"id":8, "category": "technology", "caption": "Mahrt Designs - Portfolio", "url":"assets/img/mahrtdesigns2.jpg", "pskills": "Design (UI/UX), Interactive Accessibility (ARIA/WCAG 2.0), Vanilla Javascript + jQuery, HTML5, CSS3, Git, Wordpress, Azure, Visual Studio Code, NVDA, JAWS, ChromeVox", "presults": "", "pdata":"", "pdetails": "While collaborating with Microsoft's Elite Accessibilty Development team and developing on Wordpress using tools such as NVDA, JAWS, ChromeVox, VS Code, and other ARIA testing tools, I was able to provide handicapped users and regular users alike with a lovely experience that would allow each person to experience and navigate all areas of the website while maintaining a high level of accessibility compliance standards."},
  {"id":9, "category": "misc", "caption": "Animated Login Simulation", "url":"assets/img/anim_login_1.jpg", "pskills": "Design (UI/UX), Interactive Accessibility (ARIA/WCAG 2.0), Vanilla Javascript + jQuery, HTML5, CSS3, Git, Wordpress, Azure, Visual Studio Code, NVDA, JAWS, ChromeVox", "presults": "", "pdata":"", "pdetails": "While collaborating with Microsoft's Elite Accessibilty Development team and developing on Wordpress using tools such as NVDA, JAWS, ChromeVox, VS Code, and other ARIA testing tools, I was able to provide handicapped users and regular users alike with a lovely experience that would allow each person to experience and navigate all areas of the website while maintaining a high level of accessibility compliance standards."}
]