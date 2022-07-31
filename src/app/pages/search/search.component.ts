import { Component, OnInit } from '@angular/core';
import {DebounceDecorator} from "../../core/decoraator/debounce.decorator";
import {HelperService} from "../../core/services/helper";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  keyword: string = '';
  result:any = [];
  constructor(private helper: HelperService) { }

  ngOnInit(): void {
  }
  @DebounceDecorator(500)
   searchKeyword() {
    if(this.keyword.trim().length > 0) {
        this.helper.http.getRepos(this.keyword).subscribe((res: any) => {
          this.result = res?.items || [];
          console.log(this.result)
        } , error => {
          this.result = [];
        })
    }
  }
  /**
   * @return Void
   * @Description : Used to reset the keyword and result
   */
  resetKeyword() {
    this.keyword = '';
    this.result = [];
  }
}
