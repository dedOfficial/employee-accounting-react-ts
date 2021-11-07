import { ChangeEvent, Component } from 'react';
import './SearchPanel.css';

interface SearchPanelProp {
  onSearch: (query: string) => void;
}

interface SearchPanelState {
  query: string;
}
class SearchPanel extends Component<SearchPanelProp> {
  constructor(props: SearchPanelProp) {
    super(props);
    this.state = {
      query: '',
    };

    this.setQuery = this.setQuery.bind(this);
  }

  setQuery(e: ChangeEvent) {
    const t = e.target as HTMLInputElement;
    const newQuery = t.value;
    this.setState({ query: newQuery });
    this.props.onSearch(newQuery);
  }

  render() {
    const { query } = this.state as SearchPanelState;

    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        value={query}
        onChange={this.setQuery}
      />
    );
  }
}

export default SearchPanel;
