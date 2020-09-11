import { persistData } from '../../components/firebase/utils'
import { STOOL_NAMESPACE } from '../../components/firebase/namespaces'

export function persistStoolData(state) {
  persistData(STOOL_NAMESPACE, state);
}