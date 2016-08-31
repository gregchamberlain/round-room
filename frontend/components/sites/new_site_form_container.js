import { connect } from 'react-redux';
import NewSiteForm from './new_site_form.jsx';
import { createSite } from '../../actions/site_actions.js';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createSite: site => dispatch(createSite(site))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewSiteForm);
